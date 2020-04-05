import data from "./climbingAreaData.json";

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
  });
  return slod;
}

function getTemp(endpoint) {
  let obj;
  data.results.map(landshluti => {
    if (endpoint === landshluti.id) {
      obj = landshluti;
    }
  });
  return obj;
}

export default { get, getTemp };
