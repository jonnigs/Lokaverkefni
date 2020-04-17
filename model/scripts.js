document.addEventListener("DOMContentLoaded", function (event) {
  //const canvas = document.getElementsByTagName("canvas");
  //canvas.item(0).setAttribute("id", "model");

  document
    .getElementsByClassName("fullscreen")
    .item(0)
    .addEventListener("click", (e) => {
      const elem = document.getElementById("model");

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
      }
    });
});
