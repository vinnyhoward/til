# Cameras

## `PerspectiveCamera`

This projection mode is designed to mimic the way the human eye sees. It is the most common projection mode used for rendering a 3D scene.

```js
const camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
scene.add( camera );
```

### Constructor

PerspectiveCamera( `fov` : Number, `aspect` : Number, `near` : Number, `far` : Number )

`fov` — Camera frustum vertical field of view.

`aspect` — Camera frustum aspect ratio.

`near` — Camera frustum near plane.

`far` — Camera frustum far plane.

## `OrthographicCamera`

Camera that uses orthographic projection.

In this projection mode, an object's size in the rendered image stays constant regardless of its distance from the camera.

This can be useful for rendering 2D scenes and UI elements, amongst other things.

Code Example
```js
const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
scene.add( camera );
```

### Constructor

OrthographicCamera( `left` : Number, `right` : Number, `top` : Number, `bottom` : Number, `near` : Number, `far` : Number )

`left` — Camera frustum left plane.

`right` — Camera frustum right plane.

`top` — Camera frustum top plane.

`bottom` — Camera frustum bottom plane.

`near` — Camera frustum near plane.

`far` — Camera frustum far plane.

## `DeviceOrientationControls`

Can be used to orient the camera based on the mobile device's orientation.

### Constructor

DeviceOrientationControls( object : Camera )

`object`: The camera to be controlled.

Creates a new instance of DeviceOrientationControls.

#### Events

change

Fires when the camera has been transformed by the controls.

## `FlyControls`

FlyControls enables a navigation similar to fly modes in DCC tools like Blender. You can arbitrarily transform the camera in 3D space without any limitations (e.g. focus on a specific target).

### Constructor

FlyControls( object : Camera, domElement : HTMLDOMElement )

`object:` The camera to be controlled.

`domElement`: The HTML element used for event listeners.

Creates a new instance of FlyControls.

## `FirstPersonControls`

### Constructor

FirstPersonControls( object : Camera, `domElement` : HTMLDOMElement )

`object`: The camera to be controlled.

`domElement`: The HTML element used for event listeners.

Creates a new instance of FirstPersonControls.

## PointerLockControls

The implementation of this class is based on the Pointer Lock API. PointerLockControls is a perfect choice for first person 3D games.

Code Example

```js
const controls = new PointerLockControls( camera, document.body );

// add event listener to show/hide a UI (e.g. the game's menu)

controls.addEventListener( 'lock', function () {

	menu.style.display = 'none';

} );

controls.addEventListener( 'unlock', function () {

	menu.style.display = 'block';

} );
```

### Constructor

PointerLockControls( `camera` : Camera, `domElement` : HTMLDOMElement )
`camera`: The camera of the rendered scene.

`domElement`: The HTML element used for event listeners.

Creates a new instance of `PointerLockControls`.

## `OrbitControls`

Orbit controls allow the camera to orbit around a target.
To use this, as with all files in the /examples directory, you will have to include the file separately in your HTML.

Code Example
```js
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

const controls = new OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 20, 100 );
controls.update();

function animate() {

	requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );

}
```

Constructor

OrbitControls( `object` : Camera, `domElement` : HTMLDOMElement )

`object`: (required) The camera to be controlled. The camera must not be a child of another object, unless that object is the scene itself.

`domElement`: The HTML element used for event listeners.

## `TrackballControls`

TrackballControls is similar to OrbitControls. However, it does not maintain a constant camera up vector. That means if the camera orbits over the “north” and “south” poles, it does not flip to stay "right side up".

### Constructor

TrackballControls( `camera` : Camera, `domElement` : HTMLDOMElement )

`camera`: The camera of the rendered scene.

`domElement`: The HTML element used for event listeners.

Creates a new instance of TrackballControls.

## `TransformControls`

This class can be used to transform objects in 3D space by adapting a similar interaction model of DCC tools like Blender. Unlike other controls, it is not intended to transform the scene's camera.

TransformControls expects that its attached 3D object is part of the scene graph.

### Constructor

TransformControls( `camera` : Camera, `domElement` : HTMLDOMElement )

`camera`: The camera of the rendered scene.

`domElement`: The HTML element used for event listeners.

Creates a new instance of TransformControls.

## `DragControls`

This class can be used to provide a drag'n'drop interaction.

Code Example
```js
const controls = new DragControls( objects, camera, renderer.domElement );

// add event listener to highlight dragged objects

controls.addEventListener( 'dragstart', function ( event ) {

	event.object.material.emissive.set( 0xaaaaaa );

} );

controls.addEventListener( 'dragend', function ( event ) {

	event.object.material.emissive.set( 0x000000 );

} );
```

### Constructor

DragControls( `objects` : Array, `camera` : Camera, `domElement` : HTMLDOMElement )

`objects`: An array of draggable 3D objects.

`camera`: The camera of the rendered scene.

`domElement`: The HTML element used for event listeners.

Creates a new instance of DragControls.