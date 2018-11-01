# React Component Patterns

## What is a component?

Component let you split UI into independent API'. Similar to Javascript function, a component accepts inputs called ```props``` and returns React elements, which declares what the user interface should loo like. This is why React is referred to as a declarative API because you tell it what you want he UI to look like and React takes care of the rest. 

## Component API's

What are these API you get when you install React, There are five and they are:

- Render

- State

- Props

- Context

- Lifecyle Events

A component has full capabilities of utilizing all of the above APIs, you'll find that they are naturally divided into different components. Some components tend to use a few of these features exclusively more so then others and vice versa. The deciding factor is wether a component is a ```stateful``` or ```stateless``` component. ```Stateful``` components typically utilize stateful API's, which include ```render```, ```state```, and lifecycle events, while stateless components use ```render```, ```props```, and ```context```.
