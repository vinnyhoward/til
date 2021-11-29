import Stats from "stats.js";
import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Stats
 */
const stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const displacementTexture = textureLoader.load("/textures/displacementMap.png");

/**
 * Sizes
 */
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

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(2, 2, 6);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  powerPreference: "high-performance",
  antialias: true,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);

/**
 * Test meshes
 */
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshStandardMaterial()
);
cube.castShadow = true;
cube.receiveShadow = true;
cube.position.set(-5, 0, 0);
scene.add(cube);

const torusKnot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(1, 0.4, 128, 32),
  new THREE.MeshStandardMaterial()
);
torusKnot.castShadow = true;
torusKnot.receiveShadow = true;
scene.add(torusKnot);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshStandardMaterial()
);
sphere.position.set(5, 0, 0);
sphere.castShadow = true;
sphere.receiveShadow = true;
scene.add(sphere);

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshStandardMaterial()
);
floor.position.set(0, -2, 0);
floor.rotation.x = -Math.PI * 0.5;
floor.castShadow = true;
floor.receiveShadow = true;
scene.add(floor);

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight("#ffffff", 1);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.shadow.camera.far = 15;
directionalLight.shadow.normalBias = 0.05;
directionalLight.position.set(0.25, 3, 2.25);
scene.add(directionalLight);

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  stats.begin();
  const elapsedTime = clock.getElapsedTime();

  // Update test mesh
  torusKnot.rotation.y = elapsedTime * 0.1;

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
  stats.end();
};

tick();

/**
 * Tips
 */

// Tip 2
// use in CLI to disable FPS limit in chrome
// # Unix (Terminal)
// open -a "Google Chrome" --args --disable-gpu-vsync --disable-frame-rate-limit

// # Windows (Command prompt)
// start chrome --args --disable-gpu-vsync --disable-frame-rate-limit

// // Tip 4
// console.log(renderer.info)

// Tip 5  
// Good Javascript code

// // Tip 6
// Make sure to dispose of the mesh, geometry, and material
// to prevent memory leaks
// scene.remove(cube)
// cube.geometry.dispose()
// cube.material.dispose()

// Tip 7
// Avoid using lights, use bake textures.
// if you have to use lights use cheap lights like:
// AmbientLight, DirectionalLight, HemisphereLight

// Tip 8
// Avoid adding or removing lights because the scene has to
// recompile and recalculate

// Tip 9
// Avoid adding or removing shadows for the same reason
// Use baked textures

// Tip 10
// directionalLight.shadow.camera.top = 3
// directionalLight.shadow.camera.right = 6
// directionalLight.shadow.camera.left = - 6
// directionalLight.shadow.camera.bottom = - 3
// directionalLight.shadow.camera.far = 10
// Try to use the smallest map size possible
// directionalLight.shadow.mapSize.set(1024, 1024)

// const cameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
// scene.add(cameraHelper)

// // Tip 11
// cube.castShadow = true
// cube.receiveShadow = false

// torusKnot.castShadow = true
// torusKnot.receiveShadow = false

// sphere.castShadow = true
// sphere.receiveShadow = false

// floor.castShadow = false
// floor.receiveShadow = true

// Tip 12
// renderer.shadowMap.autoUpdate = false
// renderer.shadowMap.needsUpdate = true

// Tip 14 resize textures
// When resizing, remember to keep a power of 2 resolution. That is important for 
// mipmaps.

// The resolution doesn't have to be a square; you can have a width different 
// from the height.

// If you don't do this and the render needs the mipmap, Three.js will try to
//  fix it by resizing the image to the closest power of 2 resolution, but this 
//  process will take resources and might result in bad quality textures.

// Tip 14  Use the right format
// We said that the format doesn't change the memory usage on the
//  GPU, but using the right format may reduce the loading time.

// You can use .jpg or .png according to the image and the compression 
// but also the alpha channel.

// You can use online tools like TinyPNG to reduce the weight even more. 
// And you can also try special formats like basis.

// Basis is a format just like .jpg and .png but the compression 
// is powerful, and the format can be read by the GPU more easily. 
// We won't cover it because it's pretty hard to generate, but give 
// it a try if you want. You can find information and tools to create .basis 
// files here: https://github.com/BinomialLLC/basis_universal

// Geometries

// Tip 16 - Use BufferGeometries
// Old versions of Three.js (before 125) used to have "non buffer" geometries. 
// Those were bad for performances and you should avoid them.

// If you are using a recent version of Three.js, no need to worry, all geometries 
// are buffer geometries.

// Tip 17 - Do not update vertices
// Updating the vertices of a geometry is terrible for the performances. You can do 
// it once when you create the geometry, but avoid doing it in the tick function.

// If you need to animate the vertices, do it with a vertex shader.

// Tip 18 - Mutualize geometries
// If you have multiple Meshes using the same geometry shape, create only one geometry, 
// and use it on all the meshes:
// for(let i = 0; i < 50; i++)
// {
//     const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)

//     const material = new THREE.MeshNormalMaterial()

//     const mesh = new THREE.Mesh(geometry, material)
//     mesh.position.x = (Math.random() - 0.5) * 10
//     mesh.position.y = (Math.random() - 0.5) * 10
//     mesh.position.z = (Math.random() - 0.5) * 10
//     mesh.rotation.x = (Math.random() - 0.5) * Math.PI * 2
//     mesh.rotation.y = (Math.random() - 0.5) * Math.PI * 2

//     scene.add(mesh)
// }

// Tip 19 - Merge geometries
// If the geometries aren't supposed to move, you can also merge them by using 
// the BufferGeometryUtils. This class isn't available by default, and we need 
// to import it:
// const geometries = []
// for(let i = 0; i < 50; i++)
// {
//     const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)

//     geometry.rotateX((Math.random() - 0.5) * Math.PI * 2)
//     geometry.rotateY((Math.random() - 0.5) * Math.PI * 2)

//     geometry.translate(
//         (Math.random() - 0.5) * 10,
//         (Math.random() - 0.5) * 10,
//         (Math.random() - 0.5) * 10
//     )

//     geometries.push(geometry)
// }

// const mergedGeometry = BufferGeometryUtils.mergeBufferGeometries(geometries)
// console.log(mergedGeometry)

// const material = new THREE.MeshNormalMaterial()

// const mesh = new THREE.Mesh(mergedGeometry, material)
// scene.add(mesh)

// That is harder because we have to twist the way we create things 
// and move all the meshes transformations into the geometries, but 
// this worth it because, in the end, we only have one draw call.

// Materials

// Tip 20
// Like for the geometries, if you are using the same type of material for 
// multiple meshes, try to create only one and use it multiple times:
// const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)

// for(let i = 0; i < 50; i++)
// {
//     const material = new THREE.MeshNormalMaterial()

//     const mesh = new THREE.Mesh(geometry, material)
//     mesh.position.x = (Math.random() - 0.5) * 10
//     mesh.position.y = (Math.random() - 0.5) * 10
//     mesh.position.z = (Math.random() - 0.5) * 10
//     mesh.rotation.x = (Math.random() - 0.5) * Math.PI * 2
//     mesh.rotation.y = (Math.random() - 0.5) * Math.PI * 2

//     scene.add(mesh)
// }

// Tip 21 - Use cheap materials
// Some materials like MeshStandardMaterial or MeshPhysicalMaterial need more 
// resources than materials such as MeshBasicMaterial, MeshLambertMaterial or 
// MeshPhongMaterial.

// Try to use the cheapest materials when you can.

// Tip 22 - Use InstancedMesh

// If you cannot merge the geometries because you need to have control over
//  the meshes independently, but they are using the same geometry and same 
//  material, you can use an InstancedMesh.

// It's like a mesh, but you create only one InstancedMesh, and then you 
// provide a transformation matrix for each "instance" of that mesh.

// The matrix has to be a Matrix4, and you can apply any transformation by 
// using the various available methods:

// const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)

// const material = new THREE.MeshNormalMaterial()

// const mesh = new THREE.InstancedMesh(geometry, material, 50)
// scene.add(mesh)

// for(let i = 0; i < 50; i++)
// {
//     const position = new THREE.Vector3(
//         (Math.random() - 0.5) * 10,
//         (Math.random() - 0.5) * 10,
//         (Math.random() - 0.5) * 10
//     )

//     const quaternion = new THREE.Quaternion()
//     quaternion.setFromEuler(new THREE.Euler((Math.random() - 0.5) * Math.PI * 2, (Math.random() - 0.5) * Math.PI * 2, 0))

//     const matrix = new THREE.Matrix4()
//     matrix.makeRotationFromQuaternion(quaternion)
//     matrix.setPosition(position)

//     mesh.setMatrixAt(i, matrix)
// }

// We get a result almost as good as merge geometries, but we can still 
// move the meshes by changing the matrices.

// If you intend to change these matrices in the tick function, add this 
// to the InstancedMesh:

// mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)

// Models

// // Tip 29
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// // Tip 31, 32, 34 and 35
// const shaderGeometry = new THREE.PlaneGeometry(10, 10, 256, 256)

// const shaderMaterial = new THREE.ShaderMaterial({
//     uniforms:
//     {
//         uDisplacementTexture: { value: displacementTexture },
//         uDisplacementStrength: { value: 1.5 }
//     },
//     vertexShader: `
//         uniform sampler2D uDisplacementTexture;
//         uniform float uDisplacementStrength;

//         varying vec2 vUv;

//         void main()
//         {
//             vec4 modelPosition = modelMatrix * vec4(position, 1.0);

//             float elevation = texture2D(uDisplacementTexture, uv).r;
//             if(elevation < 0.5)
//             {
//                 elevation = 0.5;
//             }

//             modelPosition.y += elevation * uDisplacementStrength;

//             gl_Position = projectionMatrix * viewMatrix * modelPosition;

//             vUv = uv;
//         }
//     `,
//     fragmentShader: `
//         uniform sampler2D uDisplacementTexture;

//         varying vec2 vUv;

//         void main()
//         {
//             float elevation = texture2D(uDisplacementTexture, vUv).r;
//             if(elevation < 0.25)
//             {
//                 elevation = 0.25;
//             }

//             vec3 depthColor = vec3(1.0, 0.1, 0.1);
//             vec3 surfaceColor = vec3(0.1, 0.0, 0.5);
//             vec3 finalColor = vec3(0.0);
//             finalColor.r += depthColor.r + (surfaceColor.r - depthColor.r) * elevation;
//             finalColor.g += depthColor.g + (surfaceColor.g - depthColor.g) * elevation;
//             finalColor.b += depthColor.b + (surfaceColor.b - depthColor.b) * elevation;

//             gl_FragColor = vec4(finalColor, 1.0);
//         }
//     `
// })

// const shaderMesh = new THREE.Mesh(shaderGeometry, shaderMaterial)
// shaderMesh.rotation.x = - Math.PI * 0.5
// scene.add(shaderMesh)
