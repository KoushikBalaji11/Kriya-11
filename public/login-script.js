const toggleForm = () => {
  const container = document.querySelector(".container");
  container.classList.toggle("active");
};
const loginButton = document.querySelector(".login-btn");
const loginForm = document.querySelector(".login-form");
const gallery = document.querySelector(".gallery");
const logo = document.querySelector(".main-logo");

loginButton.addEventListener("click", () => {
  loginForm.classList.toggle("hidden");
  gallery.classList.toggle("hidden");
  // console.log(logo);
  logo.classList.toggle("invisible");
});
