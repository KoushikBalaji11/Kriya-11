for (let i = 0; i < 11; i++) {
  const handleChange1 = function () {
    // Card toggle state
    $(".card-toggle-" + (i + 1)).removeClass("active");
    $(".to-" + (i + 1)).addClass("active");

    var isAnimating = false;

    if (!isAnimating) {
      isAnimating = true;

      $(".card-" + (i + 1))
        .find(".card-content-" + (i + 1))
        .css("z-index", 0);
      $(".card-" + (i + 1)).removeClass("active");

      var that = $(".to-" + (i + 1));

      $(".to-" + (i + 1))
        .siblings()
        .css("z-index", 1);

      setTimeout(function () {
        that
          .parent()
          .toggleClass("active")
          .find(".card-content-" + (i + 1))
          .on("transitionend", function () {
            isAnimating = false;
          });

        console.log(document.getElementsByClassName("card-toggle-" + (i + 1)));

        for (const item of document.getElementsByClassName(
          "card-toggle-" + (i + 1)
        )) {
          item.classList.toggle("to-" + (i + 1));
        }

        console.log(document.getElementsByClassName("card-toggle-" + (i + 1)));
      }, 10);
    } else {
      return;
    }
  };
  const handleChange2 = function () {
    // Card toggle state
    $("overview-" + (i + 1)).removeClass("active");
    $("behance-" + (i + 1)).addClass("active");

    var isAnimating = false;

    if (!isAnimating) {
      isAnimating = true;

      $(".card-" + (i + 1))
        .find(".card-content-" + (i + 1))
        .css("z-index", 0);
      $(".card-" + (i + 1)).removeClass("active");

      var that = $(".to-" + (i + 1));

      $("#behance-" + (i + 1))
        .siblings()
        .css("z-index", 1);

      setTimeout(function () {
        that
          .parent()
          .toggleClass("active")
          .find(".card-content-" + (i + 1))
          .on("transitionend", function () {
            isAnimating = false;
          });
      }, 10);
    } else {
      return;
    }
  };
  // $(".card-toggle-" + (i + 1)).on("click", handleChange1);
  $(".cards-" + (i + 1)).on("click", handleChange1);
  // $(".cards-" + (i + 1)).on("mouseleave", handleChange2);
}

const toTop = document.querySelector(".to-top");
const firstSection = document.querySelector(".description-text");
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
  document.querySelector(".header").scrollIntoView({
    behavior: "smooth",
  });
});
