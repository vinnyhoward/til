# Purity

In JavaScript, when a function does not ```mutate``` objects but just returns a new ```object```, it’s called a ```pure``` function.

A ```function```, or a ```method```, in order to be called ```pure``` should not cause side effects and should return the same output when called multiple times with the same input.

A ```pure``` function takes an input and returns an output without changing the input nor anything else.

ts output is only determined by the arguments. You could call this function 1M times, and given the same set of arguments, the output will always be the same.

React applies this concept to components. A React component is a pure component when its output is only dependant on its props.

All functional components are pure components:

```
const Button = props => {
  return <button>{props.message}</button>
}
```

Class components can be pure if their output only depends on the props:

```
class Button extends React.Component {
  render() {
    return <button>{this.props.message}</button>
  }
}
```