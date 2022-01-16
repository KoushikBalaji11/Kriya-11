const mainImage = document.querySelector(".img-1");
const toTop = document.querySelector(".to-top");
const header = document.querySelector(".header");
addEventListener("scroll", () => {
  mainImage.style.backgroundPositionY = `${window.pageYOffset * 0.7}px`;
});
// const contentWrapper = document.querySelector(".content-wrapper");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    console.log(entry);
    toTop.classList.toggle("active");
  },
  {
    root: null,
    threshold: 0,
  }
);

toTop.addEventListener("click", () => {
  header.scrollIntoView({
    behavior: "smooth",
  });
});

sectionObserver.observe(mainImage);
