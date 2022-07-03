const clientsWrapper = document.getElementById("clientsWrapper");
horizontalScroll(clientsWrapper, [-1900, 120], 1);

function horizontalScroll(element, border = [-50, 50], speed = 5) {
  let startPosition = window.getComputedStyle(element).transform;
  startPosition = new WebKitCSSMatrix(startPosition).m41;
  let actualPosition = startPosition;
  let positionCursor;

  element.style.transform = `translateX(${startPosition}px)`;
  // element.style.touchAction = "none";
  element.addEventListener("pointerdown", onScrollContainer);
  element.addEventListener("pointerup", StopScrollContainer);

  function onMouseMove(event) {
    let diff = (positionCursor - event.clientX) / speed;
    let percent = Math.floor(actualPosition - diff);
    element.style.transform = `translateX(${
      percent < border[0]
        ? border[0]
        : percent > border[1]
        ? border[1]
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
