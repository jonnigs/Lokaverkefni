document.addEventListener("DOMContentLoaded", function (event) {
  //const canvas = document.getElementsByTagName("canvas");
  //canvas.item(0).setAttribute("id", "model");
  const fullscreen = document.getElementsByClassName("fullscreen");
  const exitfullscreen = document.getElementsByClassName("exitfullscreen");
  const settings = document.getElementsByClassName("settings");
  const settingsMenu = document.getElementsByClassName("settings-menu");
  const information = document.getElementsByClassName("information");
  const informationMenu = document.getElementsByClassName("information-menu");

  const controlInfo = document.getElementsByClassName("info_controls");
  const controls = document.getElementsByClassName("controls");

  const markingInfo = document.getElementsByClassName("info_markings");
  const markings = document.getElementsByClassName("markings");

  const elem = document.getElementById("model");

  let setingsVisability = false;
  let informationVisability = false;

  // Fullscreen
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

  // Fara út fullscreen
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

  // Birta settings glugga
  document;
  settings.item(0).addEventListener("click", (e) => {
    if (setingsVisability) {
      //settingsMenu.item(0).setAttribute("id", "hidden");
      settingsMenu.item(0).classList.remove("fadeIn");
      settingsMenu.item(0).classList.add("fadeOut");
    } else {
      settingsMenu.item(0).setAttribute("id", "visible");
      settingsMenu.item(0).classList.remove("fadeOut");
      settingsMenu.item(0).classList.add("fadeIn");
    }
    setingsVisability = !setingsVisability;
  });

  // Birta info glugga
  document;
  information.item(0).addEventListener("click", (e) => {
    if (informationVisability) {
      informationMenu.item(0).classList.remove("fadeIn");
      informationMenu.item(0).classList.add("fadeOut");
      controlInfo.item(0).setAttribute("id", "visable");
      markingInfo.item(0).setAttribute("id", "visable");
      controls.item(0).setAttribute("id", "hidden");
      markings.item(0).setAttribute("id", "hidden");
    } else {
      informationMenu.item(0).setAttribute("id", "visible");
      informationMenu.item(0).classList.remove("fadeOut");
      informationMenu.item(0).classList.add("fadeIn");
    }
    informationVisability = !informationVisability;
  });

  // Birta stýrileiðbeiningar
  document;
  controlInfo.item(0).addEventListener("click", (e) => {
    //controlInfo.item(0).setAttribute("id", "hidden");
    //markingInfo.item(0).setAttribute("id", "hidden");
    controls.item(0).setAttribute("id", "visible");
    markings.item(0).setAttribute("id", "hidden");
  });

  // Birta útskýringar á merkingum
  document;
  markingInfo.item(0).addEventListener("click", (e) => {
    //controlInfo.item(0).setAttribute("id", "hidden");
    //markingInfo.item(0).setAttribute("id", "hidden");
    markings.item(0).setAttribute("id", "visible");
    controls.item(0).setAttribute("id", "hidden");
  });
});
