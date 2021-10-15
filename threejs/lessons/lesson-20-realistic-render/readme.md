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
