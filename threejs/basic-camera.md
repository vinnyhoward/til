# Camera

Abstract base class for cameras. This class should always be inherited when you build a new camera.

## Constructor

`Camera()`

Creates a new Camera. Note that this class is not intended to be called directly; you probably want a PerspectiveCamera or OrthographicCamera instead.

`Properties`

See the base `Object3D` class for common properties.

`.layers` : Layers

The layers that the camera is a member of. This is an inherited property from Object3D.

Objects must share at least one layer with the camera to be seen when the camera's viewpoint is rendered.

`.matrixWorldInverse` : Matrix4

This is the inverse of matrixWorld. MatrixWorld contains the Matrix which has the world transform of the Camera.

`.projectionMatrix` : Matrix4

This is the matrix which contains the projection.

`.projectionMatrixInverse` : Matrix4

The inverse of projectionMatrix.