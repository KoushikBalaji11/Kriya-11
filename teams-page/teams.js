const items = document.querySelectorAll(".item");
const toTop = document.getElementById("to-top");

const appdev = document.querySelectorAll("#appdev .team-member-image");
// .split("/").slice(-1).split("_")
appdev.forEach((el) => {
  console.log(el.getAttribute("src").split("/").slice(-1)[0].split("_"));
});

const mapper = {
  0: "opening",
  1: "appdev",
  2: "content",
  3: "creativity",
  4: "design",
  5: "event",
  6: "publicity",
  7: "webdev",
};
const firstSection = document.getElementById(mapper[0]);

items.forEach((item, index) => {
  // console.log(mapper[index + 1]);
  item.addEventListener("click", function () {
    const that = document.getElementById(mapper[index + 1]);
    console.log(that, mapper[index + 1]);
    that.scrollIntoView({ behavior: "smooth" });
  });
});

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

sectionObserver.observe(firstSection);

toTop.addEventListener("click", () => {
  document.getElementById(mapper[0]).scrollIntoView({
    behavior: "smooth",
  });
});

for (let i = 1; i < 8; i++) {
  const current = mapper[i];
  const cards = document.querySelectorAll(`#${current} .card-wrapper .card`);
  console.log(`The number of ppl in ${current} is ${cards.length}`);
}
