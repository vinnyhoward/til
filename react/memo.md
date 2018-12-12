# React.memo

Class components can opt out of rendering when their props are the same using a ```PureComponent``` or ```shouldComponentUpdate```. Now the same can be done with function components by wrapping them in ```React.memo```

```
const DoThisReRender = React.memo(MyComponent = (props) => {
  /* only rerenders if props change */
});

// can also be an es6 arrow function
const OtherScotchy = React.memo(props => {
  return <div>my memoized component</div>;
});

// and even shorter with implicit return
const ImplicitScotchy = React.memo(props => (
  <div>implicit memoized component</div>
));
```

You can also wrap an existing component like so:

```
const SomeComponent = props => <div>my rocket component. {props.fuel}!</div>;

// create a version that only renders on prop changes
const MemoizedSomeComponent = React.memo(SomeComponent);
```