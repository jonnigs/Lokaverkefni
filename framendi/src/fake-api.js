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

export default { get };
