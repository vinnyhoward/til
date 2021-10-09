# Three.js Journey

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```
# Imported Models

## Formats

Through times, many 3D model formats have been used. Each one responded to a problem, such as what data is embedded in the model, the weight, its compression, compatibility, copyrights, etc.

That is why, today, we have access to hundreds of model formats: https://en.wikipedia.org/wiki/List_of_file_formats#3D_graphics.

Some formats are dedicated to one software. Some are known to be very light but sometimes lack specific data. Some are known to have almost all data you could need in them but are heavy. Some formats are open source, some formats are not, some are binary, some are ASCII, and it goes on and on.

If you need precise data and can't find the adequate format supported by your software, you can even create your own quite easily.

Here's a list of popular formats you might come across:

- OBJ

- FBX

- STL

- PLY

- COLLADA

- 3DS

- GLTF

## GLTF

GLTF stands for GL Transmission Format. It's made by the Khronos Group (the guys behind OpenGL, WebGL, Vulkan, Collada and with many members like AMD / ATI, Nvidia, Apple, id Software, Google, Nintendo, etc.)

GLTF has become very popular these past few years.

It supports very different sets of data. You can obviously have data like the geometries and the materials but you can also have data like cameras, lights, scene graph, animations, skeletons, morphing and even multiple scene.

It also supports various file formats like json, binary, embed textures.

GLTF has become the standard when it comes to real-time. And because it's becoming a standard, most 3D softwares, game engines, and libraries support it. That means that you can easily have a similar result in different environments.

That doesn't mean that you have to use GLTF in all cases. If you merely need a geometry, you better use another format like OBJ, FBX, STL, or PLY. You should test different formats on every project to see if you have all the data you need, if the file isn't too heavy, how long it takes to uncompress the information if it's compressed, etc.

## Find a model

First, we need a model. As we said earlier, we will learn how to create our own model in a 3D software later, but for now, let's use a pre-made one.

The GLTF team also provides various models from a simple triangle to realistic models and things like animations, morphings, clearcoat materials, etc.

You can find them in this repository: https://github.com/KhronosGroup/glTF-Sample-Models

If you want to test those models, you'll have to download or clone the whole repository and take the files you need. But we will start with a simple duck that you can already find in the /static/models/ folder in the starter.

## GLTF formats

While GLTF is a format itself, it can have different file formats too. It's a little complex but for good reasons.

If you open the /static/models/Duck/ folder, you'll see 4 different folders. Each one contains the duck but in different GLTF formats:

- glTF

- glTF-Binary

- glTF-Draco

- glTF-Embedded

You can even find other formats, but those 4 are the most important and cover what we need to learn.

Be careful; your OS might hide the extension of some of these files. Refer to the file names from your code editor that should show the extension.

## glTF

This format is kind of the default format. The Duck.gltf file is a JSON that you can open in your editor. It contains various information like cameras, lights, scenes, materials, objects transformations, but neither the geometries nor the textures. The Duck0.bin file is a binary that you can't read like this. It usually contains data like the geometries and all information associated with the vertices like UV coordinates, normals, vertex colors, etc. The DuckCM.png is simply the texture of the duck.

When we load this format, we only load the Duck.gltf that contains references to the other files that will then be loaded automatically.

## glTF-Binary

This format is composed of only one file. It contains all the data we talked about in the glTF default format. That is a binary file, and you can't just open it in your code editor to see what's inside.

This format can be a little lighter and more comfortable to load because there is only one file, but you won't be able to easily alter its data. For example, if you want to resize or compress the textures, you just can't because it's inside that binary file, merge with the rest.

## glTF-Draco

This format is like the glTF default format, but the buffer data (typically the geometry) is compressed using the Draco algorithm. If you compare the .bin file size, you'll see that it's much lighter.

While there is a separate folder for this format, you can apply the Draco compression to the other formats.

Let's put this one on the side, and we will talk more about it later.

## glTF-Embedded

This format is like the glTF-Binary format because it's only one file, but this file is actually a JSON that you can open in your editor.

The only benefit of this format is to have only one easily editable file.

## Choosing

Choosing the right format is a matter of how you want to handle the assets.

If you want to be able to alter the textures or the coordinates of the lights after exporting, you better go for the glTF-default. It also presents the advantage of loading the different files separately, resulting in a load speed improvement.

If you want only one file per model and don't care about modifying the assets, you better go for glTF-Binary.

In both cases, you must decide if you want to use the Draco compression or not, but we will cover this part later.

## Adding meshes to our scene

The scene object contains everything we need. But it also includes more. Always start by studying what is available in it and watch the scale property of the different Groups, Object3D, and Mesh.

We get something like this:


```js
THREE.Group: scene
└───Array: children
    └───THREE.Object3D
        └───Array: children
            ├───THREE.PerspectiveCamera
            └───THREE.Mesh
```

The Mesh should be our duck. We don't really care about the `PerspectiveCamera`. Both the camera and the duck seem to be in the first and only `Object3D` in the scene's children array. Even worst, that `Object3D` has a scale set to a minimal value.

As you can see, it's a little complex even to get our duck, and it's where most beginners get lost.

All we want is to get our duck in the scene. We have multiples ways of doing it:

- Add the whole scene in our scene. We can do that because even if its name is scene, it's in fact a Group.

- Add the children of the scene to our scene and ignore the unused PerspectiveCamera.

- Filter the children before adding to the scene to remove the unwanted objects like the PerspectiveCamera.

- Add only the Mesh but end up with a duck that could be wrongly scaled, positioned or rotated.

- Open the file in a 3D software and remove the PerspectiveCamera then export it again.

Because our model structure is simple, we will add the `Object3D` to our scene, and ignore the unused `PerspectiveCamera` inside. In future lessons, we will add the whole scene as one object: