import data from "./climbingAreaData.json";

function get(endpoint, season) {
  console.log(season);

  let slod;
  data.results.map(landshluti => {
    if (endpoint === landshluti.id) {
      slod = landshluti.sumar[0].slod;
    }
  });
  return slod;
}

export default { get };
