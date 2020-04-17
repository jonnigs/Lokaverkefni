document.addEventListener("DOMContentLoaded", function (event) {
  //const canvas = document.getElementsByTagName("canvas");
  //canvas.item(0).setAttribute("id", "model");
  const fullscreen = document.getElementsByClassName("fullscreen");
  const exitfullscreen = document.getElementsByClassName("exitfullscreen");
  const settings = document.getElementsByClassName("settings");
  const settingsMenu = document.getElementsByClassName("settings-menu");
  const information = document.getElementsByClassName("information");
  const informationMenu = document.getElementsByClassName("information-menu");
  const elem = document.getElementById("model");

  let setingsVisability = false;
  let informationVisability = false;

  document;
  fullscreen.item(0).addEventListener("click", (e) => {
    fullscreen.item(0).setAttribute("id", "hidden");
    exitfullscreen.item(0).setAttribute("id", "visible");
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

  document;
  exitfullscreen.item(0).addEventListener("click", (e) => {
    fullscreen.item(0).setAttribute("id", "visible");
    exitfullscreen.item(0).setAttribute("id", "hidden");
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  });

  document;
  settings.item(0).addEventListener("click", (e) => {
    if (setingsVisability) {
      settingsMenu.item(0).setAttribute("id", "hidden");
    } else {
      settingsMenu.item(0).setAttribute("id", "visible");
    }
    setingsVisability = !setingsVisability;
  });

  document;
  information.item(0).addEventListener("click", (e) => {
    if (informationVisability) {
      informationMenu.item(0).setAttribute("id", "hidden");
    } else {
      informationMenu.item(0).setAttribute("id", "visible");
    }
    informationVisability = !informationVisability;
  });
});
