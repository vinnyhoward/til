# Higher Order Component (HOC)

Similar to how JavaScript's ```Higher Order Functions``` accepts functions as arguments and or/ return functions. In React the same concept extends to components and they are called ```Higher Order Components``` where it accepts a component as a input and returns a component as a output. This allows ```Higher Order Components``` to create composable and reusable, and also more encapsulated.

We can use a HOC to add methods or properties to the state of a component, or a Redux store for example.

You might want to use ```HOC``` when you want to enhance an existing component, operate on the state or props, or its rendered markup.

There is a convention of prepending a ```HOC``` with the with string (it's a convention, so it's not mandatory), so if you have a ```Button``` component, its HOC counterpart should be called ```withButton```.

Let’s create one.

The simplest example ever of a ```HOC``` is one that simply returns the component unaltered:

```
const withButton = Button => () => <Button />
```

Let’s make this a little bit more useful and add a property to that button, in addition to all the props it already came with, the color:

```
const withButton = Element => props => <Button {...props} color="red" />
```

We use this HOC in a component JSX:

```
const Button = () => {
  return <button>test</button>
}
const WrappedButton = withButton(Button)
```

and we can finally render the WrappedButton component in our app JSX:

```
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <WrappedButton />
    </div>
  )
}
```

This is a very simple example but hopefully you can get the gist of HOCs before applying those concepts to more complex scenarios.

