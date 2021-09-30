# Geometries

## `BoxGeometry`

There are 6 parameters

- `width`: The size on the `x` axis

- `height`: The size on the `y` axis

- `depth`: The size on the `z` axis

- `widthSegments`: How many sub divisions in the `x` axis

- `heightSegments`: How many sub divisions in the `y` axis

- `depthSegments`: How many sub divisions in the `z` axis

Sub divisions correspong to how much triangles should compose a face.

- `1` = 2 triangles per face

- `2` = 8 triangles per face

```js
const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)
```

The problem is that we cannot see these triangles unless we enable `wireframe: true` 

Before creating geometry, we need to understand how to store buffer geometry data. We are going to use `Float32Array`

- Typed array

- Can only store floats

- Fixed length

- Easier to handle for the computer

There are two ways to create a `Float32Array`

First way
```js
const positionArray = new Float32Array(9)

// first vertice
positionArray[0] = 0;
positionArray[1] = 0;
positionArray[2] = 0;

// second vertice
positionArray[3] = 0;
positionArray[4] = 1;
positionArray[5] = 0;

// third vertice
positionArray[6] = 1;
positionArray[7] = 0;
positionArray[8] = 0;
```

Second way
```js
const positionArray = new Float32Array([
    0, 0, 0, // first vertice
    0, 1, 0, // second vertice
    1, 0, 0, // third vertice
])
```