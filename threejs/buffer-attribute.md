# `BufferAttribute`

This class stores data for an attribute (such as vertex positions, face indices, normals, colors, UVs, and any custom attributes ) associated with a BufferGeometry`, which allows for more efficient passing of data to the GPU. See that page for details and a usage example.

Data is stored as vectors of any length (defined by `itemSize`), and in general in the methods outlined below if passing in an index, this is automatically multiplied by the vector length.

## Constructor

BufferAttribute( array : TypedArray, itemSize : Integer, normalized : Boolean )
array -- Must be a TypedArray. Used to instantiate the buffer.

This array should have

```js
itemSize * numVertices
```

elements, where numVertices is the number of vertices in the associated BufferGeometry.

`itemSize` -- the number of values of the array that should be associated with a particular vertex. For instance, if this attribute is storing a 3-component vector (such as a position, normal, or color), then itemSize should be 3.

`normalized` -- (optional) Applies to integer data only. Indicates how the underlying data in the buffer maps to the values in the GLSL code. For instance, if `array` is an instance of `UInt16Array`, and `normalized` is true, the values 0 - +65535 in the array data will be mapped to 0.0f - +1.0f in the GLSL attribute. An Int16Array (signed) would map from -32767 - +32767 to -1.0f - +1.0f. If `normalized` is false, the values will be converted to floats unmodified, i.e. 32767 becomes 32767.0f.

## Properties

`.array` : TypedArray
The array holding data stored in the buffer.

`.count` : Integer
Stores the array's length divided by the itemSize.

If the buffer is storing a 3-component vector (such as a position, normal, or color), then this will count the number of such vectors stored.

`.itemSize` : Integer
The length of vectors that are being stored in the array.

`.name` : String
Optional name for this attribute instance. Default is an empty string.

`.needsUpdate` : Boolean
Flag to indicate that this attribute has changed and should be re-sent to the GPU. Set this to true when you modify the value of the array.

Setting this to true also increments the version.

`.normalized` : Boolean
Indicates how the underlying data in the buffer maps to the values in the GLSL shader code. See the constructor above for details.

`.onUploadCallback` : Function
A callback function that is executed after the Renderer has transferred the attribute array data to the GPU.

`.updateRange` : Object
Object containing:
offset: Default is 0. Position at which to start update.
count: Default is -1, which means don't use update ranges.

This can be used to only update some components of stored vectors (for example, just the component related to color).

`.usage` : Usage
Defines the intended usage pattern of the data store for optimization purposes. Corresponds to the usage parameter of WebGLRenderingContext.bufferData(). Default is StaticDrawUsage. See usage constants for all possible values.

`.version` : Integer
A version number, incremented every time the needsUpdate property is set to true.