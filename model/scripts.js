const fullscreen = document.getElementsByClassName("fullscreen");

const model = document.getElementsByTagName("CANVAS")[0];

model.classList.add("model");

document.addEventListener("click", e => {
  const elem = document.getElementsByClassName("model");

  console.log(e);

  //if (elem.requestFullscreen) {
  //elem.requestFullscreen();
  //} else if (elem.mozRequestFullScreen) {
  /* Firefox */
  //elem.mozRequestFullScreen();
  //} else if (elem.webkitRequestFullscreen) {
  /* Chrome, Safari and Opera */
  //console.log("her");

  //elem.webkitRequestFullscreen();
  //} else if (elem.msRequestFullscreen) {
  /* IE/Edge */
  //elem.msRequestFullscreen();
  //}
});
