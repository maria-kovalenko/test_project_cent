function hiddenBlock(
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

const buttonAboutUs = document.querySelector(".about-us__more-about-us");
const advantages = document.querySelector(".advantages");
hiddenBlock("show_advantages", buttonAboutUs, advantages, true);

const buttonAdress = document.querySelector(".main-contacts__adress");
const modal = document.querySelector(".modal");
hiddenBlock("show_modal", buttonAdress, modal, true);
