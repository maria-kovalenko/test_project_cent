// const clientsWrapper = document.getElementById("clientsWrapper");

// clientsWrapper.onpointerdown = function (event) {
//   let actualPosition = event.pageX;
//   let positionElem = parseInt(
//     window.getComputedStyle(clientsWrapper)["backgroundPositionX"]
//   );

//   function onMouseMove(event) {
//     let diff = actualPosition - event.pageX;
//     if (actualPosition > event.pageX) {
//       clientsWrapper.style.backgroundPositionX = positionElem - diff + "px";
//     } else {
//       clientsWrapper.style.backgroundPositionX = positionElem - diff + "px";
//     }
//   }

//   document.addEventListener("pointermove", onMouseMove);

//   clientsWrapper.onpointerup = function () {
//     document.removeEventListener("pointermove", onMouseMove);
//     clientsWrapper.onpointerup = null;
//   };
// };

// clientsWrapper.onmousedown = function (event) {
//   let actualPosition = event.pageX;
//   let positionElem = parseInt(
//     window.getComputedStyle(clientsWrapper)["backgroundPositionX"]
//   );

//   function onMouseMove(event) {
//     let diff = actualPosition - event.pageX;
//     if (actualPosition > event.pageX) {
//       clientsWrapper.style.backgroundPositionX = positionElem - diff + "px";
//     } else {
//       clientsWrapper.style.backgroundPositionX = positionElem - diff + "px";
//     }
//   }

//   document.addEventListener("mousemove", onMouseMove);

//   clientsWrapper.onmouseup = function () {
//     document.removeEventListener("mousemove", onMouseMove);
//     clientsWrapper.onmouseup = null;
//   };
// };

const clientsWrapper = document.getElementById("clientsWrapper");
horizontalScroll(clientsWrapper, [-1900, 120], 1);

function horizontalScroll(element, border = [-50, 50], speed = 5) {
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
