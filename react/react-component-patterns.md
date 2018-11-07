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

### Presentational

Presentational components utilize props, render, and context (stateless API’s) and can be the syntactically-pretty functional, stateless component:

```
const HelloCard = (props) => {
  return (
    <div>
      <h1>Hello! {props.name}</h1>
    </div>
  )
}
```

Presentational components receive data and callbacks from props only, which can be provided by its container or parent component.

Together, containers and presentational components encapsulate logic and presentation to their prospective components:

```
const HelloCard = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

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
       <HelloCard name={this.state.name} />
      </div>
    );
  }
}
```

 Removing the presentational part from the Hello class component into its own functional stateless component. Of course, this is meant to be a very easy example — with more complex apps, this is fundamental.

 ### Higher Order Component (HOC)

 A higher order component is a function that takes a component as its argument and return a new component. This is a powerful pattern for providing and fetching data to any number of components and can be used for reusing component logic. 

 This is a powerful pattern that allows fetching and providing data to any number of components and the logic can be reused. For example ```react-router-v3``` and ```redux``` you will use the ```withRouter()``` which allows components to access routes as props if the components is used with ```connect({}())```

 ```
 import {withRouter} from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {path: ''}
  }
  
  componentDidMount() {
    let pathName = this.props.location.pathname;
    this.setState(() => {
      return {
        path: pathName,
      }
    })
  }
  
  render() {
    return (
      <div>
        <h1>Hi! I'm being rendered at: {this.state.path}</h1>
      </div>
    )
  }
}

export default withRouter(App);
```

When exporting my component, I am wrapping it with ```react-router-v4``` ```withRouter()```. In the App;s lifecyle event ```componentDidMount()```, the state is updating with the value provided by ```this.props.location.pathname```. By wrapping the component with ```withRouter()``` the component has access to ```react-router-v4``` methods via props.

### Render Callbacks

Similar to higher order components, render ```callbacks``` or render ```props``` are used to share or reuse component logic. While many developers tend to lean more towards HOC’s for reusable logic, there are some very good reasons and advantages to use render callbacks — this is best explained in Michael Jackson’s “Never write another HOC.” Just to touch base on some of the talk’s key points, render callbacks provide the luxury of reducing namespace collision and better illustrate where exactly the logic is coming from.

```
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <div onClick={this.increment}>{this.props.children(this.state)}</div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Counter>
        {state => (
          <div>
            <h1>The count is: {state.count}</h1>
          </div>
        )}
      </Counter>
    );
  }
}

```

Above in the Counter class, I’m nesting t```his.props.children``` in the render method and taking ```this.state``` as an argument. Below in the App class, I’m able to wrap my component in the Counter component, hence having access to Counter’s logic. The render callback part is line 28, where I have ```{state => ()}``` — bam! I automatically have access to Counter’s state above.