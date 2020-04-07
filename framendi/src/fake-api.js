import data from "./climbingAreaData.json";
import mulafjall from "./mulafjall.json";

// Skipti öllum get föllum út fyrir eitt get sem tengist við bakenda þegar þar að kemur.
function get(endpoint, season) {
  let slod;
  data.results.map(landshluti => {
    if (endpoint === landshluti.id) {
      if (season === "summer") {
        slod = landshluti.sumar[0].slod;
      } else {
        slod = landshluti.vetur[0].slod;
      }
    }
    return 1;
  });
  return slod;
}

function getTemp(endpoint) {
  let obj;
  data.results.map(landshluti => {
    if (endpoint === landshluti.id) {
      obj = landshluti;
    }
    return 1;
  });

  return obj;
}

function getTemp2(endpoint) {
  if (endpoint === "/mulafjall") {
    return mulafjall;
  } else {
    return false;
  }
}

export default { get, getTemp, getTemp2 };
