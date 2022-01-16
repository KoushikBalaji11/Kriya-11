var radius = 20; // how big of the radius
var imgWidth = 350; // width of images (unit: px)
var imgHeight = 280; // height of images (unit: px)
var rotateSpeed = -60; // unit: seconds/360 degrees
radius = 0.4 * window.innerWidth;

let isFirstTime = true;
let phones = matchMedia("screen and (max-width: 380px)");

let landscape = matchMedia("screen and (max-height: 500px)");

let tabs = matchMedia(
  "screen and (max-width: 780px), screen and (max-height: 700px)"
);
let delay = 3.2;
const ifPhone = (matcher) => {
  if (matcher.matches) {
    imgHeight = 180;
    imgWidth = 225;
    radius = 0.2 * innerWidth;
    rotateSpeed /= 4;
    delay = 2;
  }
  console.log(imgHeight, imgWidth);
};
const ifLandscape = (matcher) => {
  if (matcher.matches) {
    imgHeight = 140;
    imgWidth = 205;
    radius = 0.2 * innerWidth;
    rotateSpeed /= 3.5;
    delay = 1;
  }
  console.log(imgHeight, imgWidth);
};

const ifTabs = (matcher) => {
  if (matcher.matches) {
    imgHeight = 200;
    imgWidth = 250;
    radius = 0.2 * innerWidth;
    rotateSpeed /= 3;
    delay = 1;
  }
  console.log(imgHeight, imgWidth);
};

ifTabs(tabs);

ifLandscape(landscape);

ifPhone(phones);

landscape.addEventListener("change", ifLandscape);

tabs.addEventListener("change", ifTabs);

phones.addEventListener("change", ifPhone);

var body = document.querySelector("body");
var autoRotate = true; // auto rotate or not
var bgMusicURL =
  "https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a";
var bgMusicControls = true; // Show UI music control
let playAnimation = true;

const initialHeight = imgHeight;
const initialWidth = imgWidth;

var odrag = document.getElementById("drag-container");
var ospin = document.getElementById("spin-container");
var aImg = ospin.querySelectorAll("img");
aImg.forEach(function (el) {
  el.onmouseenter = stopAnimation;
  el.onmouseleave = startAnimation;
});
var aVid = ospin.querySelectorAll("video");
var allElements = [...aImg, ...aVid]; // combine 2 arrays
// Size of images

// Size of ground - depend on radius
var ground = document.getElementById("ground");
ground.style.width = "100%";
ground.style.height = radius * 3 + "px";

let start = 0;
let end = 0;

const switchImages = (maxImages, currentStart, currentEnd, Switch = true) => {
  if (Switch === false) {
    return [0, maxImages - 1];
  }
  if (currentEnd + 1 === allElements.length) {
    return [0, maxImages - 1];
  } else {
    return [currentStart + 1, currentEnd + 1];
  }
};

function getShownImages() {
  let aEle = allElements.slice(start, end + 1);
  console.log("Number of Shown Images", aEle.length);
  allElements.forEach((item) => {
    item.classList.remove("hidden");
  });
  for (let i = 0; i < allElements.length; i++) {
    if (i < start || i > end) allElements[i].classList.add("hidden");
  }
  return aEle;
}

function getNumberOfImages() {
  allElements.forEach((el) => {
    el.classList.remove("hidden");
  });
  let maxImages = Math.trunc(radius / (7 * allElements.length));

  if (end === 0) {
    if (maxImages < allElements.length) end = maxImages - 1;
    else end = allElements.length - 1;
  }

  console.log("maxImages: ", maxImages);
  console.log(`start : ${start}, end: ${end}`);

  return maxImages;
}
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

let maxImages = getNumberOfImages();
let aEle = getShownImages();

console.log(aEle);
setTimeout(init, 1000);

const mainLogo = document.querySelector(".main-logo");

function init(delayTime) {
  if (isFirstTime) {
    console.log(mainLogo);
    console.log("delay : ", delay);
    mainLogo.style.animation = `come-up 0.6s linear ${delay}s forwards`;
    setTimeout(() => {
      mainLogo.style.opacity = "1";
      mainLogo.style.transform = "translateY(0px)";
    }, 4600);
  } else {
    mainLogo.style.animation = "none";
  }
  isFirstTime = false;

  allImages.forEach((el) => {
    el.style.height = imgHeight;
    el.style.width = imgWidth;
  });

  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform =
      "rotateY(" +
      i * (360 / aEle.length) +
      "deg) translateZ(" +
      radius +
      "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (maxImages - i) / 4 + "s";
  }
}

const prevWidth = window.innerWidth;

const resizeImage = function (factor, currentHeight, reset = false) {
  if (reset === true) {
    imgHeight = initialHeight;
    imgWidth = initialWidth;
    return;
  }
  imgHeight = (1 - factor) * imgHeight;
  imgWidth = (1 - factor) * imgWidth;
};

const allImages = document.querySelectorAll(".gallery-image");

function updateGallery(event = "resize") {
  const currWidth = window.innerWidth;
  const currHeight = window.innerHeight;
  if (imgHeight > 0.2 * currHeight) {
    resizeImage((prevWidth - currWidth) / prevWidth);
  } else {
    resizeImage(0, true);
  }
  radius = 0.4 * currWidth;

  maxImages = getNumberOfImages();

  if (event === "switch-image") {
    [start, end] = switchImages(maxImages, start, end);
  } else {
    [start, end] = switchImages(maxImages, start, end, false);
  }

  aEle = getShownImages();
  console.log(
    `Max images after resize : ${maxImages}, radius after resize : ${radius}`
  );
  init();
}
window.onresize = updateGallery;
function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)

  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = yes ? "running" : "paused";
}

var sX,
  sY,
  nX,
  nY,
  desX = 0,
  desY = 0,
  tX = 0,
  tY = 10;

// auto spin
if (autoRotate) {
  var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
  ospin.style.animation = `${animationName} ${Math.abs(
    rotateSpeed
  )}s infinite linear`;
}

// setup events
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
    sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
      nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (playAnimation && Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onmousewheel = function (e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};
function redirectImage(url) {
  location = url;
}

function stopAnimation() {
  ospin.style.animationPlayState = "paused";
}
function startAnimation() {
  ospin.style.animationPlayState = "running";
}

setInterval(() => {
  updateGallery("switch-image");
  console.log(start, end);
}, 10000);
