# Effect Hook

The `useEffect` hook lets you perform side effects inside of functional components the equivalent to the `lifecycle` methods in class components.

```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

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

The snippet above is a function using `useEffect` that increments a counter.

Data fetching, setting up a subscription, and manually changing the `DOM` in React components are all examples of side effects. Whether or not you’re used to calling these operations “side effects” (or just “effects”), you’ve likely performed them in your components before.

The counterparts for `useEffect` in class components are `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined (which is nice).

There are two common kinds of side effects in React components: those that don't require clean-up, and those that do. Here are some examples.

## Effects Without Cleanup

Sometimes, we want to run some additional code after React has updated the DOM. Network requests, manual DOM mutations, and logging are common examples of effects that don’t require a cleanup. We say that because we can run them and immediately forget about them. Let’s compare how classes and Hooks let us express such side effects.

