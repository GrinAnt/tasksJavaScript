let arrow = document.querySelectorAll(".btn");
let slide = document.querySelector(".slider__list");
let firstImg = slide.querySelectorAll(".slider__item")[0];
let firstImgWidth = firstImg.clientWidth + 2;

arrow.forEach(function (icon) {
  icon.addEventListener("click", function () {
    if (icon.id == "left") {
      slide.scrollLeft -= firstImgWidth;
    } else {
      slide.scrollLeft += firstImgWidth;
    }
  });
});
