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

// Tip 23 - Low poly
// Use low poly models. The fewer polygons, the better the frame rate. If you need details, 
// try to use normal maps. They are cheap in terms of performances and can get you great 
// details at the texture cost.

// Tip 24 - Draco compression
// If the model has a lot of details with very complex geometries, use the Draco compression. 
// It can reduce weight drastically. The drawbacks are a potential freeze when uncompressing the 
// geometry, and you also have to load the Draco libraries.

// Tip 25 - Gzip
// Gzip is a compression happening on the server side. Most of the servers don't gzip files such as .glb, .gltf, .obj, etc.

// See if you can figure out how to fix that, depending on the server you are using.

// Cameras

// Tip - 26 - Field of view
// When objects are not in the field of view, they won't be rendered. That is called frustum culling.

// That can seem like a tawdry solution, but you can just reduce the camera's field of view. The fewer
//  objects on the screen, the fewer triangles to render.

// Tip 27 - Near and far
// Just like the field of view, you can reduce the near and far properties of the camera. If you have a 
// vast world with mountains, trees, structures, etc., the user probably can't see those small houses out of 
// sight far behind the mountains. Reduce the far to a decent value and those houses won't even try to be rendered.

// Renderer

// Tip 29 - Pixel ratio
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Tip 30 - Power preferences

// Some devices may be able to switch between different GPU or different GPU usage.
// We can give a hint on what power is required when instantiating the WebGLRenderer by specifying a powerPreference property:

// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas,
//   powerPreference: 'high-performance'
// })

// Tip 31 - Antialias
// The default antialias is performant, but still, it's less performant than no antialias. 
// Only add it if you have visible aliasing and no performance issue.

// Postprocessing

// Tip 32 - Limit passes

// Each post-processing pass will take as many pixels as the render's resolution (including the pixel ratio) to render. 
// If you have a 1920x1080 resolution with 4 passes and a pixel ratio of 2, that makes 1920 * 2 * 1080 * 2 * 4 = 33 177 600 
// pixels to render. Be reasonable, and try to regroup your custom passes into one.

// Shaders

// Tip 33 - Specify the precision

// You can force the precision of the shaders in the materials by changing their precision property:
// const shaderMaterial = new THREE.ShaderMaterial({
//   precision: 'lowp',
//   // ...
// })
// Check the result for any quality downgrade or glitches.

// That won't work with the RawShaderMaterial, and you'll have to add the precision by yourself on the shaders like we did on the 
// first shaders lesson.

// Tip 34 - Keep code simple
// It's laborious to monitor the difference, but try to keep your shader codes as 
// simple as possible. Avoid if statements. Make good use of swizzles and built-in functions.

// As in the vertex shader, instead of the if statement:

// modelPosition.y += clamp(elevation, 0.5, 1.0) * uDisplacementStrength;

// GLSL
// Or as in the fragment shader, instead of these complex formulas for r, g and b:

// vec3 depthColor = vec3(1.0, 0.1, 0.1);
// vec3 surfaceColor = vec3(0.1, 0.0, 0.5);
// vec3 finalColor = mix(depthColor, surfaceColor, elevation);

// Tip 35 - Use textures

// Employing perlin noise functions is cool, but it can affect your performance considerably. Sometimes, 
// you better use a texture representing the noise. Using texture2D() is way cheaper than a perlin noise 
// function, and you can produce these textures quite efficiently with tools like photoshop.

// Tip 34 - Use defines

// Uniforms are beneficial because we can tweak them and animate the values in the JavaScript. 
// But uniforms have a performance cost. If the value isn't supposed to change, you can use defines. 
// There are two ways of creating a define.

// Directly in the shader code:
// #define uDisplacementStrength 1.5

// Or in the defines property of the ShaderMaterial:
// const shaderMaterial = new THREE.ShaderMaterial({

//   // ...

//   defines:
//   {
//       uDisplacementStrength: 1.5
//   },

//   // ...
// }
// Those defines will automatically be added to the GLSL code if you are using a ShaderMaterial.

// Tip 35 - Do the calculations in the vertex shader
// If possible, do the calculations in the vertex shader and send the result to the fragment shader.