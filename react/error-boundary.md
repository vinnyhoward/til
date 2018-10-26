# Error Boundary 

React 16 introduces the new concept of an error boundary.

Error boundaries are React components that ```catch JavaScript errors anywhere in their child component tree. They log those errors, and display a fallback UI``` instead of the crashed component tree. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

A class component becomes an error boundary if it defines a new lifecycle method called ```componentDidCatch(error, info)```:

```
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

Then you can use it as a regular component.

```
<ErrorBoundary>  
   <MyWidget />
</ErrorBoundary>
```

The ```componentDidCatch()``` method works like a JavaScript ```catch {}``` block, but for components. Only class components can be error boundaries. In practice, most of the time you’ll want to declare an error boundary component once. Then you’ll use it throughout your application.

Note that ```error boundaries only catch errors in the components below them in the tree.``` An error boundary can’t catch an error within itself. If an error boundary fails trying to render the error message, the error will propagate to the closest error boundary above it. This, too, is similar to how ```catch {}``` block works in JavaScript.