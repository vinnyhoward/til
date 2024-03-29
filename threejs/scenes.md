# Scenes

Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras.

## Constructor
`Scene()`

Create a new scene object.

## Properties

`.autoUpdate` : Boolean

Default is true. If set, then the renderer checks every frame if the scene and its objects needs matrix updates. When it isn't, then you have to maintain all matrices in the scene yourself.

`.background` : Object

If not null, sets the background used when rendering the scene, and is always rendered first. Can be set to a Color which sets the clear color, a Texture covering the canvas, a cubemap as a CubeTexture or an equirectangular as a Texture . Default is null.

`.environment` : Texture

If not null, this texture is set as the environment map for all physical materials in the scene. However, it's not possible to overwrite an existing texture assigned to MeshStandardMaterial.envMap. Default is null.

`.fog` : Fog

A fog instance defining the type of fog that affects everything rendered in the scene. Default is null.

`.overrideMaterial` : Material
If not null, it will force everything in the scene to be rendered with that material. Default is null.

## Methods

`.toJSON `( meta : Object ) : Object

meta -- object containing metadata such as textures or images for the scene.
Convert the scene to three.js JSON Object/Scene format.