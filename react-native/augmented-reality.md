# Augmented Reality and React Native

- [Purpose of AR applications](#purpose-of-ar-applications)
- [ViroReact platform capabilities and API](#viroreact-platform-capabilities-and-api)
- [Science behind developing for AR](#science-behind-developing-for-ar)

## Purpose of AR applications

Augmented reality can be used in retail, you can preview products, get deals based on physical markers, get additional info about products, share images with friends and family before purchasing.

AR games which allows you to interact with the digital world by leveraging physical environments which can lead it to be more addictive. AR games also encourages social sharing and encourages users to explore the physical world with a digital overlay (e.g. Pokemon GO)

AR for manufacturing is also important, people can get valuable information without distraction. Users can receive instructional videos that allows it to be immersive and lifelike. Allows various set of tools such as measurements that allow you to measure objects or for example, your room

Location based AR allows you to get information based on intersection between location and image recognition, use markers for displaying additional location info and data. Help users with more precise navigation and orientation.

## ViroReact platform capabilities and API

There are various libraries for AR

- react-native-arkit/react-native-arcore
- Unity3d, Unreal
- React360
- ViroReact

## Science behind developing for AR

### Coordinate System

Developing in augmented reality means you are working with 3D space, which abides by a coordinate system with the `x`, `y` and `z` axis. What does this coordinate system do exactly? Think of it as a 3D space and the center is you. A positive `z` axis is behind the viewer, while a negative is in front.

### Light Material

There are 4 main light types that you can take advantage of:

- Ambient Light - Basically light that surrounds us
- Directional Light - A main light source coming from one direction, for example the sun
- Point Light - Light that is emitted from an object
- Spot Light - As the name suggests, it is defined as a cone (inner angle, outer angle)

![alt text][light-material]

[light-material]: https://i.ibb.co/PT3MDGc/Screen-Shot-2019-06-23-at-3-28-48-PM.png "Light Material"

### Materials and Textures

Defining how an object will be shown in a scene by defining the materials and textures

- Diffuse Texture - Texture that defines basic color of an object
- Specular Texture - Texture that defines how "shiny" the object will be
- Normal Texture - Defines how light will bump from the surface like it is a mesh

![alt text][materials-textures]

[materials-textures]: https://i.ibb.co/Mcv4hsK/Screen-Shot-2019-06-23-at-3-23-37-PM.png "Materials and Textures"