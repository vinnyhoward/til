# `CubeCamera`

Code Example:

```js
// Create cube render target
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 128, { format: THREE.RGBFormat, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter } );

// Create cube camera
const cubeCamera = new THREE.CubeCamera( 1, 100000, cubeRenderTarget );
scene.add( cubeCamera );

// Create car
const chromeMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: cubeRenderTarget.texture } );
const car = new Mesh( carGeometry, chromeMaterial );
scene.add( car );

// Update the render target cube
car.visible = false;
cubeCamera.position.copy( car.position );
cubeCamera.update( renderer, scene );

// Render the scene
car.visible = true;
renderer.render( scene, camera );
```

### Constructor

CubeCamera( near : Number, far : Number, renderTarget : WebGLCubeRenderTarget )

near -- The near clipping distance.
far -- The far clipping distance.
renderTarget -- The destination cube render target.

Constructs a CubeCamera that contains 6 PerspectiveCameras that render to a WebGLCubeRenderTarget.

### Properties

See the base Object3D class for common properties.

`.renderTarget` : WebGLCubeRenderTarget
The destination cube render target.

## Methods

See the base `Object3D` class for common methods.

`.update` ( renderer : WebGLRenderer, scene : Scene ) : null
renderer -- The current WebGL renderer
scene -- The current scene

Call this to update the `renderTarget`.
