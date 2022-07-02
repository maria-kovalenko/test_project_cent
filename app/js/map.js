const adressBtn = document.querySelector(".main-contacts__adress");
const map = document.querySelector(".modal");

adressBtn.onmouseover = function () {
  map.style.display = "block";
};

advantages.onmouseout = function () {
  map.style.display = "none";
};
