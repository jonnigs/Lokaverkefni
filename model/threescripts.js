var BaseURL =
  "https://notendur.hi.is/~jgs7/Lokaverkefni/modelFiles/mulafjall/e-kaffistofan/";
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
mtlLoader.setPath(
  "https://notendur.hi.is/~jgs7/Lokaverkefni/modelFiles/mulafjall/e-kaffistofan/"
);
mtlLoader.load("kaffistofanCutOff.mtl", function (materials) {
  materials.preload();
  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.setPath(
    "https://notendur.hi.is/~jgs7/Lokaverkefni/modelFiles/mulafjall/e-kaffistofan/"
  );
  objLoader.load("kaffistofanCutOff.obj", function (object) {
    scene.add(object);
  });
});
var geometry = new THREE.BoxGeometry(1, 1, 1);
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
scene.add(mesh2);

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
});

const numbers = document.getElementById("labelVisability");
const routes = document.getElementById("routeVisability");

numbers.addEventListener("click", (e) => {
  if (meshVisable) {
    scene.remove(mesh);
  } else {
    scene.add(mesh);
  }
  meshVisable = !meshVisable;
});

routes.addEventListener("click", (e) => {
  if (mesh2Visable) {
    scene.remove(mesh2);
  } else {
    scene.add(mesh2);
  }
  mesh2Visable = !mesh2Visable;
});

var animate = function () {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

animate();
