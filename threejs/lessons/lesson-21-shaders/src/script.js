import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
// custom shaders
import vertexShader from './shaders/test/vertex.glsl'
import fragmentShader from './shaders/test/fragment.glsl'

// Step 1: Base

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


// Step 2: Textures
const textureLoader = new THREE.TextureLoader()
const flagTextures = textureLoader.load('/textures/flag-french.jpg');

// Step 3: Test mesh
// Geometry
const geometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32)

// Step 9: Adding and manipulating random attributes
const count = geometry.attributes.position.count;
const randoms = new Float32Array(count);

for (let i = 0; i < count; i++) {
    randoms[i] = Math.random();
}

geometry.setAttribute('attributeRandom', new THREE.BufferAttribute(randoms, 1));

// Step 8: Add custom shaders corresponding files, and webpack configurations
// Raw Material
const material = new THREE.RawShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
        // sending frequency to "vertex"
        uniformFrequency: { value: new THREE.Vector2(10, 5) },
        // Step 12 - part a: Adding animations through time
        uniformTime: { value: 0 },
        // Step 13: Sending color to "fragment"
        uniformColor: { value: new THREE.Color('orange') },
        // Step 14 - part a: Sending image to "fragment"
        uniformTexture: { value: flagTextures }
    }
})


// Step 11 - part b: Adding Frequency Controls
gui.add(material.uniforms.uniformFrequency.value, 'x').min(0).max(20).step(0.01).name('frequencyX')
gui.add(material.uniforms.uniformFrequency.value, 'y').min(0).max(20).step(0.01).name('frequencyY')

// Mesh
const mesh = new THREE.Mesh(geometry, material)
mesh.scale.y = 2 / 3;
scene.add(mesh)


// Step 4: Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


// Step 5: Camera
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0.25, - 0.25, 1)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


// Step 6: Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Step 7: Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    // Step 12 - part b: Adding animations through time
    // Update material by sending "elapsedTime" to "vertex"
    material.uniforms.uniformTime.value = elapsedTime;

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()