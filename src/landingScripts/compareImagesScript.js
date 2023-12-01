const initComparisons = () => {
  const overlayedImages = document.getElementsByClassName("imgOverlay");
  for (let i = 0; i < overlayedImages.length; i++) {
    compareImages(overlayedImages[i]);
  }
};

export default initComparisons;

function compareImages(image) {
  let clicked = 0;

  const width = image.offsetWidth;
  const height = image.offsetHeight;

  image.style.width = width / 2 + "px";

  const slider = document.createElement("DIV");
  slider.setAttribute("class", "imgSlider");

  image.parentElement.insertBefore(slider, image);

  slider.style.top = height / 2 - slider.offsetHeight / 2 + "px";
  slider.style.left = width / 2 - slider.offsetWidth / 2 + "px";

  slider.addEventListener("mousedown", slideReady);
  window.addEventListener("mouseup", slideFinish);
  slider.addEventListener("touchstart", slideReady);
  window.addEventListener("touchend", slideFinish);

  function slideReady(event) {
    event.preventDefault();

    clicked = 1;

    window.addEventListener("mousemove", slideMove);
    window.addEventListener("touchmove", slideMove);
  }

  function slideFinish() {
    clicked = 0;
  }

  function slideMove(event) {
    if (clicked == 0) return false;

    const relativePosition = getCursorPosition(event, image);
    const position = relativePosition < 0 ? 0 : relativePosition;

    slide(position);
  }

  const slide = (position) => {
    image.style.width = position + "px";
    slider.style.left = image.offsetWidth - slider.offsetWidth / 2 + "px";
  };
}

const getCursorPosition = (event, image) => {
  const realEvent = event.changedTouches ? event.changedTouches[0] : event;
  const imagePosition = image.getBoundingClientRect();
  const xAxisPosition = realEvent.pageX - imagePosition.left;

  return xAxisPosition - window.scrollX;
};
