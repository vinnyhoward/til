# Realistic Render

## Tone mapping

The tone mapping intends to convert High Dynamic Range (HDR) values to Low Dynamic Range (LDR) values. HDR is much more than the following interpretation, but you can see that like images where the color values can go beyond 1. It's useful if we want to store light information because light doesn't have intensity limits.

While our assets are not HDR, the tone mapping effect can have a realistic result as if the camera was poorly adjusted.

To change the tone mapping, update the toneMapping property on the `WebGLRenderer`.

There are multiple possible values:

- THREE.NoToneMapping (default)

- THREE.LinearToneMapping

- THREE.ReinhardToneMapping

- THREE.CineonToneMapping

- THREE.ACESFilmicToneMapping

## Antialiasing

Our model isn't subject to that problem because there is a lot of details, but if you have a screen with a pixel ratio of 1. Look at the edges —especially the bright ones— rotate the camera slowly, and you might see the problem:

It's a well-known problem. When the rendering of a pixel occurs, it tests what geometry is being rendered in that pixel. It calculates the color, and, in the end, that color appears on the screen.

But geometry edges are usually not perfectly aligned with vertical lines and horizontal lines of pixel of your screen and this is why you get this stair-like artifact named aliasing.

There are many ways of fixing that problem, and developers have been struggling with it for many years.

One easy solution would be to increase our render's resolution, let's say to the double. When resized to it's normal-sized, each pixel color will automatically be averaged from the 4 pixels rendered.

This solution is called super sampling (SSAA) or fullscreen sampling (FSAA), and it's the easiest and more efficient one. Unfortunately, that means 4 times more pixels to render, which can result in performance issues.

The other solution is called multi sampling (MSAA). Again, the idea is to render multiple values per pixel (usually 4) like for the super sampling but only on the geometries' edges. The values of the pixel are then averaged to get the final pixel value.

The most recent GPU can perform this multi sampling anti-aliasing, and Three.js handles the setup automatically. We just need to change the antialias property to true during the instantiating — and not after:

```js
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
```

Those aliasing artifacts should be gone now.

Using the antialias exhausts some resources. As we said earlier, screens with a pixel ratio above 1 don't really need antialias. One right way to do this would be to activate it only for screens with a pixel ratio below 2. We will see how to achieve that in a future lesson, along with other optimizations.