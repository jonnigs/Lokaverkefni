const fullscreen = document.getElementsByClassName("fullscreen");

const model = document.getElementsByTagName("CANVAS")[0];

model.classList.add("model");

console.log(fullscreen);

fullscreen.addEventListener("click", () => {
  const elem = document.getElementsByClassName("model");

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    console.log("her");

    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
});
