# PerspectiveCamera

Camera that uses perspective projection.

This projection mode is designed to mimic the way the human eye sees. It is the most common projection mode used for rendering a 3D scene.

Code Example

```js
const camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
scene.add( camera );
```

## Constructor
PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )

fov — Camera frustum vertical field of view.

aspect — Camera frustum aspect ratio.

near — Camera frustum near plane.

far — Camera frustum far plane.

Together these define the camera's viewing frustum.

## Properties

See the base Camera class for common properties.
Note that after making changes to most of these properties you will have to call .updateProjectionMatrix for the changes to take effect.

`.aspect` : Float
Camera frustum aspect ratio, usually the canvas width / canvas height. Default is 1 (square canvas).

`.far` : Float
Camera frustum far plane. Default is 2000.

Must be greater than the current value of near plane.

`.filmGauge` : Float
Film size used for the larger axis. Default is 35 (millimeters). This parameter does not influence the projection matrix unless .filmOffset is set to a nonzero value.

`.filmOffset` : Float
Horizontal off-center offset in the same unit as .filmGauge. Default is 0.

`.focus` : Float
Object distance used for stereoscopy and depth-of-field effects. This parameter does not influence the projection matrix unless a StereoCamera is being used. Default is 10.

`.fov` : Float
Camera frustum vertical field of view, from bottom to top of view, in degrees. Default is 50.

`.near` : Float
Camera frustum near plane. Default is 0.1.

The valid range is greater than 0 and less than the current value of the far plane. Note that, unlike for the OrthographicCamera, 0 is not a valid value for a PerspectiveCamera's near plane.

`.view `: Object
Frustum window specification or null. This is set using the .setViewOffset method and cleared using .clearViewOffset.

`.zoom` : number
Gets or sets the zoom factor of the camera. Default is 1.

## Methods

See the base Camera class for common methods.

`.clearViewOffset` () : null
Removes any offset set by the .setViewOffset method.

`.getEffectiveFOV` () : Float
Returns the current vertical field of view angle in degrees considering .zoom.

`.getFilmHeight `() : Float
Returns the height of the image on the film. If .aspect is less than or equal to one (portrait format), the result equals .filmGauge.

`.getFilmWidth` () : Float
Returns the width of the image on the film. If .aspect is greater than or equal to one (landscape format), the result equals .filmGauge.

`.getFocalLength `() : Float
Returns the focal length of the current .fov in respect to .filmGauge.

`.setFocalLength` ( focalLength : Float ) : null

Sets the FOV by focal length in respect to the current .filmGauge.

By default, the focal length is specified for a 35mm (full frame) camera.

`.setViewOffset` ( fullWidth : Float, fullHeight : Float, x : Float, y : Float, width : Float, height : Float ) : null

fullWidth — full width of multiview setup
fullHeight — full height of multiview setup
x — horizontal offset of subcamera
y — vertical offset of subcamera
width — width of subcamera
height — height of subcamera

Sets an offset in a larger frustum. This is useful for multi-window or multi-monitor/multi-machine setups.

For example, if you have 3x2 monitors and each monitor is 1920x1080 and the monitors are in grid like this: