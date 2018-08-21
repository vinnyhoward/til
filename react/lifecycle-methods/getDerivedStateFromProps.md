# Update of life cycle methods in React

## Previous legacy async rendering unlocks:

* componentWillMount
* componentWillReceiveProps
* componentWillUpdate

These lifecycle methods have often been misunderstood and subtly misused; furthermore, we anticipate that their potential misuse may be more problematic with async rendering. Because of this, we will be adding an “UNSAFE_” prefix to these lifecycles in an upcoming release. (Here, “unsafe” refers not to security but instead conveys that code using these lifecycles will be more likely to have bugs in future versions of React, especially once async rendering is enabled.)

* We are adding the following lifecycle aliases: ```UNSAFE_componentWillMount```, ```UNSAFE_componentWillReceiveProps```, and ```UNSAFE_componentWillUpdate```. (Both the old lifecycle names and the new aliases will be supported.)

## New async rendering unlocks, ```getDerivedStateFromProps``` and ```getSnapshotBeforeUpdate```

# New lifecycle: getDerivedStateFromProps

```
class Example extends React.Component {
  static getDerivedStateFromProps(props, state) {
    // ...
  }
}
```

The new static ```getDerivedStateFromProps``` lifecycle is invoked after a component is instantiated as well as before it is re-rendered. It can return an object to update state, or null to indicate that the new props do not require any state updates

Together with ```componentDidUpdate```, this new lifecycle should cover all use cases for the legacy ```componentWillReceiveProps```.