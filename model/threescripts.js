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
document.body.appendChild(renderer.domElement);

camera.position.x = -5.293679018687284;
camera.position.y = 7.718624108803545;
camera.position.z = 8.608903997312051;

var ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.campingFactor = 0.25;
controls.enableZoom = true;

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({ color: 0xf7f7f7 });
var mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
});

var animate = function() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

animate();
