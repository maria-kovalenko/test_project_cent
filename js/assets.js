const assetsScroll = document.getElementById("assetsScroll");
horizontalScrollcards(assetsScroll, 1);

function horizontalScrollcards(element, speed = 5) {
  let widthContainer = element.clientWidth + 35;
  let screenWidth = document.getElementsByTagName("html")[0].clientWidth;
  let rightBorder = -(widthContainer - screenWidth);
  let leftBorder = 0;

  window.addEventListener("resize", start);

  function start() {
    screenWidth = document.getElementsByTagName("html")[0].clientWidth;
    rightBorder = -(widthContainer - screenWidth);
  }

  let startPosition = window.getComputedStyle(element).transform;
  startPosition = new WebKitCSSMatrix(startPosition).m41;
  let actualPosition = startPosition;
  let positionCursor;

  element.style.transform = `translateX(${startPosition}px)`;
  element.style.touchAction = "none";
  element.addEventListener("pointerdown", onScrollContainer);
  element.addEventListener("pointerup", StopScrollContainer);

  function onMouseMove(event) {
    let diff = (positionCursor - event.clientX) / speed;
    let percent = Math.floor(actualPosition - diff);
    element.style.transform = `translateX(${
      percent < rightBorder
        ? rightBorder
        : percent > leftBorder
        ? leftBorder
        : percent
    }px)`;
  }

  function onScrollContainer(event) {
    element.ondragstart = function () {
      return false;
    };
    positionCursor = event.clientX;
    element.addEventListener("pointermove", onMouseMove);
  }

  function StopScrollContainer(event) {
    actualPosition = element.style.transform.match(/-\d+|\d+/)[0];
    positionCursor = 0;
    element.removeEventListener("pointermove", onMouseMove);
  }
}
