function HoverHiddenBlock(
    addClassName,
    hoverButton,
    showElement,
    hoverElement = false
) {
    // hoverElement - показывать элемент при удержании указателя на нём

    hoverButton.addEventListener("mouseover", Show);
    hoverButton.addEventListener("mouseout", Hidden);

    function Show() {
        showElement.classList.toggle(addClassName);
    }

    function Hidden() {
        showElement.classList.remove(addClassName);
    }

    if (hoverElement) {
        showElement.addEventListener("mouseover", Show);
        showElement.addEventListener("mouseout", Hidden);
    }
}

function ClickShowBlock(
    addShowClass,
    showElement,
    disableOtherElement = undefined,
    clickButtonElements
) {


  for (let buttonElement of clickButtonElements) {
    buttonElement.addEventListener("pointerdown", Active);
  }

  function Active() {
    if (showElement.classList.contains(addShowClass)) {
      showElement.classList.remove(addShowClass)
      window.scrollTo(0, 1100);
      if (disableOtherElement !== undefined) disableOtherElement.style.display = "block"
    } else {
      showElement.classList.add(addShowClass)
      window.scrollTo(0, 0);
      if (disableOtherElement !== undefined) disableOtherElement.style.display = "none"
    }
  }
}

const buttonAboutUs = document.querySelector(".about-us__more-about-us");
const advantages = document.querySelector(".advantages");
HoverHiddenBlock("show_advantages", buttonAboutUs, advantages, true);

const buttonAdress = document.querySelector(".main-contacts__adress");
const modal = document.querySelector(".modal");
HoverHiddenBlock("show_modal", buttonAdress, modal, true);

const casesCard = document.querySelectorAll(".showResults");
const buttonBackAbout = document.querySelector(".back-button");
const results = document.querySelector(".results");
const disableElement = document.querySelector(".page1");

ClickShowBlock('result_show',results, disableElement, [buttonBackAbout, ...casesCard])