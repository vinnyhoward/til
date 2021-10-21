# `OrthographicCamera`

Camera that uses orthographic projection.

In this projection mode, an object's size in the rendered image stays constant regardless of its distance from the camera.

This can be useful for rendering 2D scenes and UI elements, amongst other things.

Code Example
```js
const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
scene.add( camera );
```

## Constructor

OrthographicCamera( `left` : Number, `right` : Number, `top` : Number, `bottom` : Number, `near` : Number, `far` : Number )

`left` — Camera frustum left plane.

`right` — Camera frustum right plane.

`top` — Camera frustum top plane.

`bottom` — Camera frustum bottom plane.

`near` — Camera frustum near plane.

`far` — Camera frustum far plane.
