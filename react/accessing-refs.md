# Accessing Refs

When a ```ref``` is passed to an ```element``` in render, a reference to the node becomes accessible at the current attribute of the ref.

```
const node = this.myRef.current;
```

The value of the ```ref``` differs depending on the type of the node:

- When the ```ref``` attribute is used on an HTML element, the ```ref``` created in the constructor with ```React.createRef()``` receives the underlying DOM element as its current property.

- When the ```ref``` attribute is used on a custom class component, the ```ref``` object receives the mounted instance of the component as its current.

- You may not use the ```ref``` attribute on functional components because they don’t have instances.