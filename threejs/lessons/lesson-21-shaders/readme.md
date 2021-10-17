# Shaders

## What is a shader

A shader is, in fact, one of the main components of WebGL. If we had started WebGL without Three.js, it would have been one of the first things we would have to learn, and this is why native WebGL is so hard.

A shader is a program written in GLSL that is sent to the GPU. They are used to position each vertex of a geometry and to colorize each visible pixel of that geometry. The term "pixel" isn't accurate because each point in the render doesn't necessarily match each pixel of the screen and this is why we prefer to use the term "fragment" so don't be surprised if you see both terms.

Then we send a lot of data to the shader such as the vertices coordinates, the mesh transformation, information about the camera and its field of view, parameters like the color, the textures, the lights, the fog, etc. The GPU then processes all of this data following the shader instructions, and our geometry appears in the render.

There are two types of shaders, and we need both of them.

## Vertex shader

The vertex shader's purpose is to position the vertices of the geometry. The idea is to send the vertices positions, the mesh transformations (like its position, rotation, and scale), the camera information (like its position, rotation, and field of view). Then, the GPU will follow the instructions in the vertex shader to process all of this information in order to project the vertices on a 2D space that will become our render —in other words, our canvas.

When using a vertex shader, its code will be applied on every vertex of the geometry. But some data like the vertex position will change between each vertex. This type of data —the one that changes between vertices— is called an attribute. But some data doesn't need to switch between each vertex like the position of the mesh. Yes, the location of the mesh will impact all the vertices, but in the same way. This type of data —the one that doesn't change between vertices— is called a uniform. We will get back to attributes and uniforms later.

The vertex shader happens first. Once the vertices are placed, the GPU knows what pixels of the geometry are visible and can proceed to the fragment shader.

## Fragment shader

The fragment shader purpose is to color each visible fragment of the geometry.

The same fragment shader will be used for every visible fragment of the geometry. We can send data to it like a color by using uniforms —just like the vertex shader, or we can send data from the vertex shader to the fragment shader. We call this type of data —the one that comes from the vertex shader to the fragment shader— varying. We will get back to this later.

The most straightforward instruction in a fragment shader can be to color all the fragments with the same color. We get the equivalent of the `MeshBasicMaterial` —if we had set only the color property.

Or we can send more data to the shader, for instance, a light position. We can then color the fragments according to how much the face is in front of the light source. We would get the `MeshPhongMaterial` equivalent—if we had one light in the scene.

## Summary

The vertex shader position the vertices on the render.

The fragment shader color each visible fragment (or pixel) of that geometry.

The fragment shader is executed after the vertex shader.

Data that changes between each vertices (like their position) is called attribute and can only be used in the vertex shader.

Data that doesn't change between vertices (like the mesh position or a color) is called uniform and can be use in both the vertex shader and the fragment shader.

We can send data from the vertex shader to the fragment shader using varying.

## GLSL

The language used to code the shaders is called GLSL and stands for OpenGL Shading Language. It's close to C language. Let's learn the basics of its syntax.

## Logging

There is no console and, thus, no way to log values. That is due to the code being executed for every vertex and every fragment. It would make no sense to log one value.

## Indentation

The indentation is not essential. You can indent as you like.

## Semicolon

The semicolon is required to end any instruction. Forgetting even one semicolon will probably result in a compilation error, and the whole material won't work.

## Variables

It's a typed language, meaning that we must specify a variable's type, and we cannot assign any other type to that variable.

To declare a variable, we must start by the type, followed by the name (usually in camelCase), then the = sign, then the value, and end with a

```glsl
float fooBar = 0.123;
```

There are multiple different types.

## Float

Floats are decimals. They can be negative or positive. We must always provide the . of the decimals even if the value is rounded:

```glsl
float foo = - 0.123;
float bar = 1.0;
```

We can do mathematic operations like `+,` `-`, `*` and `/`:

```glsl
float a = 1.0;
float b = 2.0;
float c = a / b;
```

## Integer

Integers work just like the floats, but without the decimals' .:

```glsl
int foo = 123;
int bar = - 1;
```
We can also do mathematic operations:

```glsl
int a = 1;
int b = 2;
int c = a * b;
```

But we can't mix `float` and `int` in these operations:

```glsl
float a = 1.0;
int b = 2;
float c = a * b;
```

But we can convert types on the fly:

```glsl
float a = 1.0;
int b = 2;
float c = a * float(b);
```

## Boolean

Booleans are just booleans:

```glsl
bool foo = true;
bool bar = false;
```

## Vector 2

This is where things get interesting. If we want to store values like 2 coordinates with `x` and `y` properties, we can use a `vec2`:

```glsl
vec2 foo = vec2(1.0, 2.0);
```

An empty `vec2` will result in an error:

```glsl
vec2 foo = vec2();
```

We can change these properties after creating the `vec2`:

```glsl
vec2 foo = vec2(0.0  );
foo.x = 1.0;
foo.y = 2.0;
```

Doing operations like multiplying a `vec2` with a `float` will operate both the `x` and the `y` properties:

```glsl
vec2 foo = vec2(1.0, 2.0);
foo *= 2.0;
```

## Vector 3

`vec3` is just like `vec2`, but with a third property named `z`. It's very convenient when one needs 3D coordinates:

```glsl
vec3 foo = vec3(0.0);
vec3 bar = vec3(1.0, 2.0, 3.0);
bar.z = 4.0;
```

While we can use `x`, `y`, and `z`, we can also work with `r`, `g`, and `b`. This is just syntax sugar and the result is exactly the same. It's very effective when we use a `vec3` to store colors:

```glsl
vec3 purpleColor = vec3(0.0);
purpleColor.r = 0.5;
purpleColor.b = 1.0;
```

A `vec3` can also be partially created from a `vec2`:

```glsl
vec2 foo = vec2(1.0, 2.0);
vec3 bar = vec3(foo, 3.0);
```

We can also take a part of the `vec3` to generate a `vec2`:
```glsl
vec3 foo = vec3(1.0, 2.0, 3.0);
vec2 bar = foo.xy;
```

Here, the bar will be a `vec2` with `1.0`, and `2.0` as values.

This is called a `swizzle` and we can also use the properties in a different order:

```glsl
vec3 foo = vec3(1.0, 2.0, 3.0);
vec2 bar = foo.yx;
```

Finally, the vec4 works like it's two predecessors but with a fourth value named w or a —w because there is no letter after z in the alphabet and a for "alpha":

```glsl
vec4 foo = vec4(1.0, 2.0, 3.0, 4.0);
vec4 bar = vec4(foo.zw, vec2(5.0, 6.0));
```

There are other types of variables such as `mat2`, `mat3`, `mat4`, or `sampler2D`, but we will see those later.