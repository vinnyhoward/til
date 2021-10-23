# `StereoCamera`

Dual PerspectiveCameras used for effects such as 3D Anaglyph or Parallax Barrier.

## Constructor

StereoCamera( )

Properties
`.aspect` : Float
Default is 1.

`.eyeSep` : Float
Default is 0.064.

`.cameraL` : PerspectiveCamera
Left camera. This is added to layer 1 - objects to be rendered by the left camera must also be added to this layer.

`.cameraR` : PerspectiveCamera
Right camera.This is added to layer 2 - objects to be rendered by the right camera must also be added to this layer.

## Methods

`.update` ( camera : PerspectiveCamera ) : null

Update the stereo cameras based on the camera passed in.
