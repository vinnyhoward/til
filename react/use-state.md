# Building Your Own Custom Hooks

Hooks are a new welcomed addition to `React 16.8`, they allow you to use state in functional components instead of classes. Hooks are inpsired by the library [recompose](https://github.com/acdlite/recompose)

Arguably one of the most popular tools in the new hooks release is the `useState` hook which allows you to inject state into your functional component.

Here is an example that you should be familiar with when using state:

```
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

Here is the functional component equivalent using `useState`:

```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
## What’s a Hook?

Our new example starts by importing the useState Hook from React:

```
import React, { useState } from 'react';

function Example() {
  // ...
}
```

What is a Hook? A Hook is a special function that lets you “hook into” React features. For example, `useState` is a `Hook` that lets you add React state to function components. We’ll learn other Hooks later.

When would I use a Hook? If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that right now!

## How to declare state

In a class, we initialize the count state to `0` by setting `this.state ` to `{ count: 0 }` in the constructor:

```
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
```

In a function component, we have no this, so we can’t assign or read `this.state.` Instead, we call the `useState` Hook directly inside our component:

```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

```