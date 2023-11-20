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

// MARS
const marsGeometry = new THREE.SphereGeometry(5, 40, 20);
const marsMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load('./assets/images/marsmap.jpg'),
  bumpMap: textureLoader.load('./assets/images/marsbump.jpg'),
  bumpScale: 0.5,
});
const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
scene.add(marsMesh)

const marsCurve = new THREE.EllipseCurve(0,0, 400, 400, 0, 2*Math.PI)
const marsPoints = marsCurve.getSpacedPoints(200);
const marsOrbitGeometry = new THREE.BufferGeometry().setFromPoints(marsPoints);
const marsOrbitMaterial = new THREE.LineBasicMaterial({color: 0x333333, transparent: false, opacity: 0.5 });
const marsOrbit = new THREE.Line(marsOrbitGeometry, marsOrbitMaterial);
marsOrbit.rotateX(-Math.PI/2);
scene.add(marsOrbit);

// JUPITER
const jupiterGeometry = new THREE.SphereGeometry(10, 40, 20);
const jupiterMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load('./assets/images/jupitermap.jpg'),
});
const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
scene.add(jupiterMesh)

const jupiterCurve = new THREE.EllipseCurve(0,0, 500, 500, 0, 2*Math.PI)
const jupiterPoints = jupiterCurve.getSpacedPoints(200);
const jupiterOrbitGeometry = new THREE.BufferGeometry().setFromPoints(jupiterPoints);
const jupiterOrbitMaterial = new THREE.LineBasicMaterial({color: 0x333333, transparent: false, opacity: 0.5 });
const jupiterOrbit = new THREE.Line(jupiterOrbitGeometry, jupiterOrbitMaterial);
jupiterOrbit.rotateX(-Math.PI/2);
scene.add(jupiterOrbit);

// SATURN
const saturnGeometry = new THREE.SphereGeometry(10, 40, 20);
const saturnMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load('./assets/images/saturnmap.jpg'),
});
const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);
scene.add(saturnMesh)

const saturnCurve = new THREE.EllipseCurve(0,0, 600, 600, 0, 2*Math.PI)
const saturnPoints = saturnCurve.getSpacedPoints(200);
const saturnOrbitGeometry = new THREE.BufferGeometry().setFromPoints(saturnPoints);
const saturnOrbitMaterial = new THREE.LineBasicMaterial({color: 0x333333, transparent: false, opacity: 0.5 });
const saturnOrbit = new THREE.Line(saturnOrbitGeometry, saturnOrbitMaterial);
saturnOrbit.rotateX(-Math.PI/2);
scene.add(saturnOrbit);

// URANUS
const uranusGeometry = new THREE.SphereGeometry(10, 40, 20);
const uranusMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load('./assets/images/uranusmap.jpg'),
});
const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);
scene.add(uranusMesh)

const uranusCurve = new THREE.EllipseCurve(0,0, 700, 700, 0, 2*Math.PI)
const uranusPoints = uranusCurve.getSpacedPoints(200);
const uranusOrbitGeometry = new THREE.BufferGeometry().setFromPoints(uranusPoints);
const uranusOrbitMaterial = new THREE.LineBasicMaterial({color: 0x333333, transparent: false, opacity: 0.5 });
const uranusOrbit = new THREE.Line(uranusOrbitGeometry, uranusOrbitMaterial);
uranusOrbit.rotateX(-Math.PI/2);
scene.add(uranusOrbit);

// NEPTUNE
const neptuneGeometry = new THREE.SphereGeometry(10, 40, 20);
const neptuneMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load('./assets/images/neptunemap.jpg'),
});
const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
scene.add(neptuneMesh)

const neptuneCurve = new THREE.EllipseCurve(0,0, 800, 800, 0, 2*Math.PI)
const neptunePoints = neptuneCurve.getSpacedPoints(200);
const neptuneOrbitGeometry = new THREE.BufferGeometry().setFromPoints(neptunePoints);
const neptuneOrbitMaterial = new THREE.LineBasicMaterial({color: 0x333333, transparent: false, opacity: 0.5 });
const neptuneOrbit = new THREE.Line(neptuneOrbitGeometry, neptuneOrbitMaterial);
neptuneOrbit.rotateX(-Math.PI/2);
scene.add(neptuneOrbit);

// PLUTO
const plutoGeometry = new THREE.SphereGeometry(5, 40, 20);
const plutoMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load('./assets/images/plutomap.jpg'),
  bumpMap: textureLoader.load('./assets/images/plutobump.jpg'),
  bumpScale: 0.5,
});
const plutoMesh = new THREE.Mesh(plutoGeometry, plutoMaterial);
scene.add(plutoMesh)

const plutoCurve = new THREE.EllipseCurve(0,0, 900, 900, 0, 2*Math.PI)
const plutoPoints = plutoCurve.getSpacedPoints(200);
const plutoOrbitGeometry = new THREE.BufferGeometry().setFromPoints(plutoPoints);
const plutoOrbitMaterial = new THREE.LineBasicMaterial({color: 0x333333, transparent: false, opacity: 0.5 });
const plutoOrbit = new THREE.Line(plutoOrbitGeometry, plutoOrbitMaterial);
plutoOrbit.rotateX(-Math.PI/2);
scene.add(plutoOrbit);

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
const tempRotationSpeed = 0.01;

// const orbitSpeedMultiplier = 0.20; // Every earth year is 5 seconds
const orbitSpeedMultiplier = 0.1; // Every earth year is 10 seconds

const mercuryYear = 4.14;
const venusYear = 1.62;
const earthYear = 1;
const marsYear = 0.53;
const juptierYear = 0.08;
const saturnYear = 0.03;
const uranusYear = 0.011;
const neptuneYear = 0.006;
const plutoYear = 0.004;

function animate () {

  const mercuryOrbitSpeed = mercuryYear * orbitSpeedMultiplier;
  const venusOrbitSpeed = venusYear * orbitSpeedMultiplier;
  const earthOrbitSpeed = earthYear * orbitSpeedMultiplier;
  const marsOrbitSpeed = marsYear * orbitSpeedMultiplier;
  const juptierOrbitSpeed = juptierYear * orbitSpeedMultiplier;
  const saturnOrbitSpeed = saturnYear * orbitSpeedMultiplier;
  const uranusOrbitSpeed = uranusYear * orbitSpeedMultiplier;
  const neptuneOrbitSpeed = neptuneYear * orbitSpeedMultiplier;
  const plutoOrbitSpeed = plutoYear * orbitSpeedMultiplier;

  sun.rotation.y += tempRotationSpeed;

  const meTime = mercuryOrbitSpeed * (performance.now() / 1000);
  const meT = (meTime % loopTime) / loopTime;
  let meP = mercuryCurve.getPoint(meT);
  mercuryMesh.position.x = meP.x;
  mercuryMesh.position.z = meP.y;
  mercuryMesh.rotation.y += tempRotationSpeed

  const vTime = venusOrbitSpeed * (performance.now() / 1000);
  const vT = (vTime % loopTime) / loopTime;
  let vP = venusCurve.getPoint(vT);
  venusMesh.position.x = vP.x;
  venusMesh.position.z = vP.y;
  venusMesh.rotation.y += tempRotationSpeed

  const eTime = earthOrbitSpeed * (performance.now() / 1000);
  const eT = (eTime % loopTime) / loopTime;
  let eP = earthCurve.getPoint(eT);
  earthMesh.position.x = eP.x;
  earthMesh.position.z = eP.y;
  earthMesh.rotation.y += tempRotationSpeed

  const maTime = marsOrbitSpeed * (performance.now() / 1000);
  const maT = (maTime % loopTime) / loopTime;
  let maP = marsCurve.getPoint(maT);
  marsMesh.position.x = maP.x;
  marsMesh.position.z = maP.y;
  marsMesh.rotation.y += tempRotationSpeed

  const jTime = juptierOrbitSpeed * (performance.now() / 1000);
  const jT = (jTime % loopTime) / loopTime;
  let jP = jupiterCurve.getPoint(jT);
  jupiterMesh.position.x = jP.x;
  jupiterMesh.position.z = jP.y;
  jupiterMesh.rotation.y += tempRotationSpeed

  const sTime = saturnOrbitSpeed * (performance.now() / 1000);
  const sT = (sTime % loopTime) / loopTime;
  let sP = saturnCurve.getPoint(sT);
  saturnMesh.position.x = sP.x;
  saturnMesh.position.z = sP.y;
  saturnMesh.rotation.y += tempRotationSpeed

  const uTime = uranusOrbitSpeed * (performance.now() / 1000);
  const uT = (uTime % loopTime) / loopTime;
  let uP = uranusCurve.getPoint(uT);
  uranusMesh.position.x = uP.x;
  uranusMesh.position.z = uP.y;
  uranusMesh.rotation.y += tempRotationSpeed

  const nTime = neptuneOrbitSpeed * (performance.now() / 1000);
  const nT = (nTime % loopTime) / loopTime;
  let nP = neptuneCurve.getPoint(nT);
  neptuneMesh.position.x = nP.x;
  neptuneMesh.position.z = nP.y;
  neptuneMesh.rotation.y += tempRotationSpeed

  const pTime = plutoOrbitSpeed * (performance.now() / 1000);
  const pT = (pTime % loopTime) / loopTime;
  let pP = plutoCurve.getPoint(pT);
  plutoMesh.position.x = pP.x;
  plutoMesh.position.z = pP.y;
  plutoMesh.rotation.y += tempRotationSpeed

  controls.update();
  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}

animate()