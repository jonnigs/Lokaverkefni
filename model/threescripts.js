var BaseURL =
  "https://notendur.hi.is/~jgs7/Lokaverkefni/modelFiles/mulafjall/e-kaffistofan/";
var OBJnumbers;
var numbersVisable = true;
var OBJroutes;
var routesVisable = true;
var OBJmodel;
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

camera.position.x = -5.293679018687284;
camera.position.y = 7.718624108803545;
camera.position.z = 8.608903997312051;

var ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.campingFactor = 0.25;
controls.enableZoom = true;

// Hlaða númerum
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath(BaseURL);
mtlLoader.setPath(BaseURL);
mtlLoader.load("baraNumer/untitled.mtl", function (materials) {
  materials.preload();
  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.setPath(BaseURL);
  objLoader.load("baraNumer/untitled.obj", function (object) {
    OBJnumbers = object;
    scene.add(object);
  });
});

// Hlaða leiðum
var mtlLoader2 = new THREE.MTLLoader();
mtlLoader2.setTexturePath(BaseURL);
mtlLoader2.setPath(BaseURL);
mtlLoader2.load("baraLeidir/untitled.mtl", function (materials) {
  materials.preload();
  var objLoader2 = new THREE.OBJLoader();
  objLoader2.setMaterials(materials);
  objLoader2.setPath(BaseURL);
  objLoader2.load("baraLeidir/untitled.obj", function (object) {
    OBJroutes = object;
    scene.add(object);
  });
});

// Hlaða módeli
var mtlLoader3 = new THREE.MTLLoader();
mtlLoader3.setTexturePath(BaseURL);
mtlLoader3.setPath(BaseURL);
mtlLoader3.load("baraModel/untitled.mtl", function (materials) {
  materials.preload();
  var objLoader3 = new THREE.OBJLoader();
  objLoader3.setMaterials(materials);
  objLoader3.setPath(BaseURL);
  objLoader3.load("baraModel/untitled.obj", function (object) {
    OBJmodel = object;
    scene.add(object);
  });
});

/*var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({ color: 0xddd });
var mesh = new THREE.Mesh(geometry, material);
var meshVisable = true;

var geometry2 = new THREE.BoxGeometry(1, 1, 1);
var material2 = new THREE.MeshLambertMaterial({ color: 0xf7f7f7 });
var mesh2 = new THREE.Mesh(geometry2, material2);
var mesh2Visable = true;
mesh2.position.x = -1;
mesh2.position.y = -1;
mesh2.position.z = -1;

scene.add(mesh);
scene.add(mesh2);*/

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

  renderer.render(scene, camera);
};

animate();
