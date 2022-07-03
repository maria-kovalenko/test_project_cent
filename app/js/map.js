const adressBtn = document.querySelector(".main-contacts__adress");
const map = document.querySelector(".modal");

adressBtn.addEventListener("mouseover", showMap);
adressBtn.addEventListener("mouseout", hiddenMap);
map.addEventListener("mouseover", showMap);
map.addEventListener("mouseout", hiddenMap);

function showMap() {
  map.style.opacity = "1";
  map.style.top = "0";
}

function hiddenMap() {
  map.style.top = "-900px";
  map.style.opacity = "0";
}
