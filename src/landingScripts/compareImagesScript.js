const compareImagesScript = () => {
  const overlayedImages = document.getElementsByClassName("imgOverlay");
  for (let i = 0; i < overlayedImages.length; i++) {
    compareImages(overlayedImages[i]);
  }
};

export default compareImagesScript;

function compareImages(img) {
  let clicked = 0;

  const width = img.offsetWidth;
  const height = img.offsetHeight;

  img.style.width = width / 2 + "px";

  const slider = document.createElement("DIV");
  slider.setAttribute("class", "imgSlider");

  img.parentElement.insertBefore(slider, img);

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

    let cursorPosition = getCursorPosition(event);

    if (cursorPosition < 0) cursorPosition = 0;
    if (cursorPosition > width) cursorPosition = width;

    slide(cursorPosition);
  }

  function getCursorPosition(event) {
    event = event.changedTouches ? event.changedTouches[0] : event;

    const imageCoordinates = img.getBoundingClientRect();
    const position = event.pageX - imageCoordinates.left;

    return position - window.scrollX;
  }

  function slide(position) {
    img.style.width = position + "px";
    slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + "px";
  }
}
