const clientsWrapper = document.getElementById("clientsWrapper");

clientsWrapper.onpointerdown = function (event) {
  let actualPosition = event.pageX;
  let positionElem = parseInt(
    window.getComputedStyle(clientsWrapper)["backgroundPositionX"]
  );

  function onMouseMove(event) {
    let diff = actualPosition - event.pageX;
    if (actualPosition > event.pageX) {
      clientsWrapper.style.backgroundPositionX = positionElem - diff + "px";
    } else {
      clientsWrapper.style.backgroundPositionX = positionElem - diff + "px";
    }
  }

  document.addEventListener("pointermove", onMouseMove);

  clientsWrapper.onpointerup = function () {
    document.removeEventListener("pointermove", onMouseMove);
    clientsWrapper.onpointerup = null;
  };
};

clientsWrapper.onmousedown = function (event) {
  let actualPosition = event.pageX;
  let positionElem = parseInt(
    window.getComputedStyle(clientsWrapper)["backgroundPositionX"]
  );

  function onMouseMove(event) {
    let diff = actualPosition - event.pageX;
    if (actualPosition > event.pageX) {
      clientsWrapper.style.backgroundPositionX = positionElem - diff + "px";
    } else {
      clientsWrapper.style.backgroundPositionX = positionElem - diff + "px";
    }
  }

  document.addEventListener("mousemove", onMouseMove);

  clientsWrapper.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    clientsWrapper.onmouseup = null;
  };
};

// const clientsWrapper = document.getElementById("clientsWrapper");
// horizontalScroll(clientsWrapper);

// const assetsScroll = document.getElementById("assetsScroll");
// horizontalScroll(assetsScroll, [-30, 30], 15);

// function horizontalScroll(element, border = [-100, 100], speed = 5) {
//   element.style.touchAction = "none";
//   let actualPosition =
//     element.style.transform !== ""
//       ? element.style.transform.match(/-\d+|\d+/)[0]
//       : 0;
//   let positionCursor;

//   element.addEventListener("pointerdown", onScrollContainer);
//   element.addEventListener("pointerup", StopScrollContainer);

//   function onMouseMove(event) {
//     let diff = (positionCursor - event.clientX) / speed;
//     let percent = Math.floor(actualPosition - diff);
//     element.style.transform = `translateX(${
//       percent < border[0]
//         ? border[0]
//         : percent > border[1]
//         ? border[1]
//         : percent
//     }%)`;
//   }

//   function onScrollContainer(event) {
//     element.ondragstart = function () {
//       return false;
//     };
//     positionCursor = event.clientX;
//     element.addEventListener("pointermove", onMouseMove);
//   }

//   function StopScrollContainer(event) {
//     actualPosition = element.style.transform.match(/-\d+|\d+/)[0];
//     positionCursor = 0;
//     element.removeEventListener("pointermove", onMouseMove);
//   }
// }
