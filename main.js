import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();
const textureLoader = new THREE.TextureLoader();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(150);

const sunGeometry = new THREE.SphereGeometry(50, 24, 24);
const sunMaterial = new THREE.MeshStandardMaterial({
  emissive: 0xffd700,
  emissiveMap: textureLoader.load('./assets/images/sunmap.jpg'),
  emissiveIntensity: 1
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.position.set(0,0,0);
scene.add(sun)

// MERCURY
const mercuryGeometry = new THREE.SphereGeometry(5, 40, 20);
const mercuryMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load('./assets/images/mercurymap.jpg'),
  bumpMap: textureLoader.load('./assets/images/mercurybump.jpg'),
  bumpScale: 0.5,
});
const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
scene.add(mercuryMesh)

const mercuryCurve = new THREE.EllipseCurve(0,0, 100, 100, 0, 2*Math.PI)
const mercuryPoints = mercuryCurve.getSpacedPoints(200);
const mercuryOrbitGeometry = new THREE.BufferGeometry().setFromPoints(mercuryPoints);
const mercuryOrbitMaterial = new THREE.LineBasicMaterial({color: 0x333333, transparent: false, opacity: 0.5 });
const mercuryOrbit = new THREE.Line(mercuryOrbitGeometry, mercuryOrbitMaterial);
mercuryOrbit.rotateX(-Math.PI/2);
scene.add(mercuryOrbit);

// VENUS
const venusGeometry = new THREE.SphereGeometry(5, 40, 20);
const venusMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load('./assets/images/venusmap.jpg'),
  bumpMap: textureLoader.load('./assets/images/venusbump.jpg'),
  bumpScale: 0.5,
});
const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);
scene.add(venusMesh)

const venusCurve = new THREE.EllipseCurve(0,0, 200, 200, 0, 2*Math.PI)
const venusPoints = venusCurve.getSpacedPoints(200);
const venusOrbitGeometry = new THREE.BufferGeometry().setFromPoints(venusPoints);
const venusOrbitMaterial = new THREE.LineBasicMaterial({color: 0x333333, transparent: false, opacity: 0.5 });
const venusOrbit = new THREE.Line(venusOrbitGeometry, venusOrbitMaterial);
venusOrbit.rotateX(-Math.PI/2);
scene.add(venusOrbit);

// EARTH
const earthGeometry = new THREE.SphereGeometry(5, 40, 20);
const earthMaterial = new THREE.MeshPhongMaterial({
  map: textureLoader.load('./assets/images/earthmap.jpg'),
  bumpMap: textureLoader.load('./assets/images/earthbump.jpg'),
  bumpScale: 0.5,
  specularMap: textureLoader.load('./assets/images/earthspec.jpg')
});
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh)

const earthCurve = new THREE.EllipseCurve(0,0, 300, 300, 0, 2*Math.PI)
const earthPoints = earthCurve.getSpacedPoints(200);
const earthOrbitGeometry = new THREE.BufferGeometry().setFromPoints(earthPoints);
const earthOrbitMaterial = new THREE.LineBasicMaterial({color: 0x333333, transparent: false, opacity: 0.5 });
const earthOrbit = new THREE.Line(earthOrbitGeometry, earthOrbitMaterial);
earthOrbit.rotateX(-Math.PI/2);
scene.add(earthOrbit);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(10000, 100)
// scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

// const spaceTexture = new THREE.TextureLoader().load('space.jpg');
// scene.background = spaceTexture;

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;

}
document.body.onscroll = moveCamera

const loopTime = 1;
const mercuryOrbitSpeed = 0.00003;
const venusOrbitSpeed = 0.00002;
const earthOrbitSpeed = 0.00001;

function animate () {
  const mTime = mercuryOrbitSpeed * performance.now();
  const mT = (mTime % loopTime) / loopTime;
  let mP = mercuryCurve.getPoint(mT);
  mercuryMesh.position.x = mP.x;
  mercuryMesh.position.z = mP.y;

  const vTime = venusOrbitSpeed * performance.now();
  const vT = (vTime % loopTime) / loopTime;
  let vP = venusCurve.getPoint(vT);
  venusMesh.position.x = vP.x;
  venusMesh.position.z = vP.y;

  const eTime = earthOrbitSpeed * performance.now();
  const eT = (eTime % loopTime) / loopTime;
  let eP = earthCurve.getPoint(eT);
  earthMesh.position.x = eP.x;
  earthMesh.position.z = eP.y;

  controls.update();
  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}

animate()