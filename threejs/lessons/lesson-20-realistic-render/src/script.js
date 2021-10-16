// styles
import "./style.css";
// packages
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Concepts to learn
// SRGBEncoding - More precise colors
// https://www.donmccurdy.com/2020/06/17/color-management-in-threejs/
// https://medium.com/game-dev-daily/the-srgb-learning-curve-773b7f68cf7a

// Step 0: Base
// Debug
const gui = new dat.GUI();
const debugObject = {};

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Step 1: Mesh - Test Sphere
const testSphere = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshStandardMaterial() // Remember to use "MeshStandardMaterial" so light can react with material
);
scene.add(testSphere);

// Step 2: Lights
const directionalLight = new THREE.DirectionalLight("#ffffff", 3);
directionalLight.position.set(0.25, 3, -2.25);
// Step 13 - part b: Shadows
directionalLight.castShadow = true;
directionalLight.shadow.camera.far = 15
directionalLight.shadow.mapSize.set(1024, 1024)
scene.add(directionalLight);
// Step 13 - part d: Shadow Camera Helper
const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
scene.add(directionalLightCameraHelper)

// Step 3: Add lights to GUI
gui
  .add(directionalLight, "intensity")
  .min(0)
  .max(10)
  .step(0.001)
  .name("lightIntensity");
gui
  .add(directionalLight.position, "x")
  .min(-5)
  .max(5)
  .step(0.001)
  .name("lightX");
gui
  .add(directionalLight.position, "y")
  .min(-5)
  .max(5)
  .step(0.001)
  .name("lightY");
gui
  .add(directionalLight.position, "z")
  .min(-5)
  .max(5)
  .step(0.001)
  .name("lightZ");

// Step 4: Add viewport listener
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Step 5: Add Camera
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(4, 1, -4);
scene.add(camera);

// Step 6: Add Camera Controls
// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Step 7: Add renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  // Step 12: Add Anti-Aliasing
  antialias: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.physicallyCorrectLights = true;
// Add better renderer
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMappingExposure = 1;
// Step 13 - part a: Shadows
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Step 11: Add Tone Mapping
renderer.toneMapping = THREE.ACESFilmicToneMapping;
gui
  .add(renderer, "toneMapping", {
    No: THREE.NoToneMapping,
    Linear: THREE.LinearToneMapping,
    Reinhard: THREE.ReinhardToneMapping,
    Cineon: THREE.CineonToneMapping,
    ACESFilmic: THREE.ACESFilmicToneMapping,
  })
  .onFinishChange(() => {
    // needed because for whatever reason
    // the values result in a string but
    // needs to be a number
    renderer.toneMapping = Number(renderer.toneMapping);
    updateAllMaterials();
  });
gui.add(renderer, "toneMappingExposure").min(0).max(10).step(0.001);

// Step 9: Add Loaders and Models
// Update all materials util function
const updateAllMaterials = () => {
  scene.traverse((child) => {
    if (
      child instanceof THREE.Mesh &&
      child.material instanceof THREE.MeshStandardMaterial
    ) {
      // An option to add env map into the the scene environment map
      // versus doing "scene.environment = environmentMap"
      child.material.envMap = environmentMap;
      child.material.envMapIntensity = debugObject.envMapIntensity;
      // part of Step 11 - need to render "needsUpdate to true"
      child.material.needsUpdate = true;
      // Step 13 - part c: Shadows
      child.castShadow = true
      child.receiveShadow = true
      
    }
  });
};

// Loaders
const gltfLoader = new GLTFLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();

// Add Model
gltfLoader.load("/models/FlightHelmet/glTF/FlightHelmet.gltf", (gltf) => {
  gltf.scene.scale.set(10, 10, 10);
  gltf.scene.position.set(0, -4, 0);
  gltf.scene.rotation.y = Math.PI * 0.5;
  scene.add(gltf.scene);

  updateAllMaterials();
  // Add GUI to rotate model
  gui
    .add(gltf.scene.rotation, "y")
    .min(-Math.PI)
    .max(Math.PI)
    .step(0.001)
    .name("rotation");
});

// Step 10: Add Environment Map
// Add Environment Map
const environmentMap = cubeTextureLoader.load([
  "/textures/environmentMaps/0/px.jpg",
  "/textures/environmentMaps/0/nx.jpg",
  "/textures/environmentMaps/0/py.jpg",
  "/textures/environmentMaps/0/ny.jpg",
  "/textures/environmentMaps/0/pz.jpg",
  "/textures/environmentMaps/0/nz.jpg",
]);
// Use SRGB encoding for more precise colors
environmentMap.encoding = THREE.sRGBEncoding;
scene.background = environmentMap;
scene.environment = environmentMap;

debugObject.envMapIntensity = 5;
gui
  .add(debugObject, "envMapIntensity")
  .min(0)
  .max(10)
  .step(0.001)
  .onChange(updateAllMaterials);

// Step 8: Add animation/update ticker
const tick = () => {
  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
