var BaseURL = "https://notendur.hi.is/~jgs7/Lokaverkefni/model/";
var area = getQueryVariable("area");
var sector = getQueryVariable("sector");
var URL = BaseURL + area + "/" + sector + "/";
console.log(URL);

var OBJloading;
var loadingVisable = true;
var OBJnumbers;
var numbersVisable = true;
var OBJroutes;
var routesVisable = true;
var OBJmodel;

// Fall sem nær í gildi úr querystring eftir breytu
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  console.log("Query variable %s not found", variable);
}

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("model").appendChild(renderer.domElement);

/*camera.position.x = -5.293679018687284;
camera.position.y = 7.718624108803545;
camera.position.z = 8.608903997312051;
*/

camera.position.x = 2.4598917529848676;
camera.position.y = -0.06428893824059892;
camera.position.z = -0.11382671050097559;

var ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.campingFactor = 0.25;
controls.enableZoom = true;

// Hlaða loading skjá
var mtlLoader0 = new THREE.MTLLoader();
mtlLoader0.setTexturePath(BaseURL + "loading/");
mtlLoader0.setPath(BaseURL + "loading/");
mtlLoader0.load("baraModel/untitled.mtl", function (materials) {
  materials.preload();
  var objLoader0 = new THREE.OBJLoader();
  objLoader0.setMaterials(materials);
  objLoader0.setPath(BaseURL + "loading/");
  objLoader0.load("baraModel/untitled.obj", function (object) {
    OBJloading = object;
    scene.add(object);
  });
});
/*
// Hlaða númerum
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath(URL);
mtlLoader.setPath(URL);
mtlLoader.load("baraNumer/untitled.mtl", function (materials) {
  materials.preload();
  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.setPath(URL);
  objLoader.load("baraNumer/untitled.obj", function (object) {
    OBJnumbers = object;
    scene.add(object);
  });
});

// Hlaða leiðum
var mtlLoader2 = new THREE.MTLLoader();
mtlLoader2.setTexturePath(URL);
mtlLoader2.setPath(URL);
mtlLoader2.load("baraLeidir/untitled.mtl", function (materials) {
  materials.preload();
  var objLoader2 = new THREE.OBJLoader();
  objLoader2.setMaterials(materials);
  objLoader2.setPath(URL);
  objLoader2.load("baraLeidir/untitled.obj", function (object) {
    OBJroutes = object;
    scene.add(object);
  });
});

// Hlaða módeli
var mtlLoader3 = new THREE.MTLLoader();
mtlLoader3.setTexturePath(URL);
mtlLoader3.setPath(URL);
mtlLoader3.load("baraModel/untitled.mtl", function (materials) {
  materials.preload();
  var objLoader3 = new THREE.OBJLoader();
  objLoader3.setMaterials(materials);
  objLoader3.setPath(URL);
  objLoader3.load("baraModel/untitled.obj", function (object) {
    OBJmodel = object;
    scene.add(object);
  });
});
*/
/*
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({ color: 0xddd });
var OBJnumbers = new THREE.Mesh(geometry, material);

var geometry2 = new THREE.BoxGeometry(1, 1, 1);
var material2 = new THREE.MeshLambertMaterial({ color: 0xf7f7f7 });
var OBJroutes = new THREE.Mesh(geometry2, material2);
OBJnumbers.position.x = -1;
OBJnumbers.position.y = -1;
OBJnumbers.position.z = -1;

var geometry3 = new THREE.BoxGeometry(1, 1, 1);
var material3 = new THREE.MeshLambertMaterial({ color: 515151 });
var OBJmodel = new THREE.Mesh(geometry3, material3);
OBJmodel.position.x = 1;
OBJmodel.position.y = 1;
OBJmodel.position.z = 1;

scene.add(OBJnumbers);
scene.add(OBJroutes);
scene.add(OBJmodel);
*/

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
});

const numbers = document.getElementById("labelVisability");
const routes = document.getElementById("routeVisability");

numbers.addEventListener("click", (e) => {
  if (numbersVisable) {
    scene.remove(OBJnumbers);
  } else {
    scene.add(OBJnumbers);
  }
  numbersVisable = !numbersVisable;
});

routes.addEventListener("click", (e) => {
  if (routesVisable) {
    scene.remove(OBJroutes);
  } else {
    scene.add(OBJroutes);
  }
  routesVisable = !routesVisable;
});

var animate = function () {
  requestAnimationFrame(animate);
  OBJloading.rotation.x -= 0.03;

  renderer.render(scene, camera);
};

animate();
