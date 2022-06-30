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
