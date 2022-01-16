const express = require("express");
const mysql = require("mysql");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const md5 = require("md5");
const app = express();
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//Preoptions to be set for a session to be Creating
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
//Initializing passport and sessions to use in later part of code
app.use(passport.initialize());
app.use(passport.session());

// SQL Connection
var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
con.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MySql Database");
  }
});

//This serialize and deserialize will be used by passport to create and open the cookie to see the content in it
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

//Code for Loggingin using passport and creating a cookie with there username
passport.use(
  new LocalStrategy(function (username, password, done) {
    con.query(
      "SELECT * FROM users WHERE username = ?",
      username,
      function (err, result) {
        if (err) {
          return done(err);
        }
        if (result.length > 0) {
          if (md5(password) === result[0].password) {
            console.log("Succefully logged in");
            return done(null, result[0].username);
          } else {
            console.log("Incorrect password");
            return done(null, false);
          }
        } else {
          console.log("No such user with this username");
          return done(null, false);
        }
      }
    );
  })
);

//Code for Registration using passport and creating a cookie with there username
passport.use(
  "local-signup",
  new LocalStrategy(function (username, password, done) {
    con.query(
      "SELECT * FROM users WHERE username = ?",
      username,
      function (err, result) {
        if (err) {
          return done(err);
        }
        if (result.length > 0) {
          console.log("Username Already Exits");
          return done(null, false);
        } else {
          var sql = "INSERT INTO users (username,password) VALUES ?";
          var values = [[username, md5(password)]];
          con.query(sql, [values], function (err, result) {
            if (err) {
              return done(err);
            } else {
              console.log("Succefully Registered");
              return done(null, values[0][0]);
            }
          });
        }
      }
    );
  })
);

// Code for creating a table named users

/* var sql = "CREATE TABLE users (username VARCHAR(255), password VARCHAR(255),name VARCHAR(255), phonenumber INT, year_of_study INT)";
con.query(sql, function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log("Table created");
  }
}); */

//Home route
app.get("/", function (req, res) {
  if (req.isAuthenticated()) {
    res.redirect("/secrets");
  } else {
    res.render("Homepage.ejs");
  }
});

//Get route for login
app.get("/login", function (req, res) {
  if (req.isAuthenticated()) {
    res.redirect("/secrets");
  } else {
    res.sendFile(__dirname + "/files/login.html");
  }
});

//Get route for registration
app.get("/register", function (req, res) {
  if (req.isAuthenticated()) {
    res.redirect("/secrets");
  } else {
    res.sendFile(__dirname + "/files/register.html");
  }
});
app.get("/about", function (req, res) {
    if (req.isAuthenticated()) {
      res.redirect("/secrets");
    } else {
      res.render("Aboutpage.ejs");
    }
  });

//Get route for secrets
app.get("/secrets", function (req, res) {
  if (req.isAuthenticated()) {
    res.sendFile(__dirname + "/files/secrets.html");
  } else {
    res.redirect("/login");
  }
  console.log(req.user);
});

//Get route for logout
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

//Post route for register
app.post(
  "/register",
  passport.authenticate("local-signup", {
    failureRedirect: "/register",
  }),
  function (req, res) {
    res.redirect("/secrets");
  }
);

//Post route for login
app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
  }),
  function (req, res) {
    res.redirect("/secrets");
  }
);

app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});
