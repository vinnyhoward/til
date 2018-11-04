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

## Component Patterns

Component patterns are the  best use practices were first introduced to split data or the logic later and the UI or presentational layer. By dividing responsibilities amongst your components, you can create more reusable, cohesive components that can be used to compose complex UI;s. This is important if you want your app to scale effectively.

***Common component patterns are***

- Container (Stateful)

- Presentational (Stateless)

- Higher order components (HOC’s)

- Render callback

### Container

Containers are your data or logic layer that uses stateful APIs. Using life-cycle events you can connect to a state management such as redux or flux to pass down data or inject data into the components that need it. In order to have access to all stateful API’s, a container must be a class component as opposed to a functional component.

In the example below, we have a class component called Hello, which has state, a life-cycle event ```componentDidMount()``` and ```render```.

```
class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  componentDidMount() {
    // SOME AJAX REQUEST HERE
    this.setState(() => {
      return {
        name: "Vinny",
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Hello! {this.state.name}</h1>
      </div>
    );
  }
```

This component can be divided to a presentational (stateless) component, further dividing the responsibilities.  