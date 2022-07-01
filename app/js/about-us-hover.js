const aboutUsBtn = document.querySelector(".about-us__more-about-us");
const advantages = document.querySelector(".advantages");

aboutUsBtn.onmouseover = function () {
  advantages.style.display = "grid";
};

advantages.onmouseout = function () {
  advantages.style.display = "none";
};
