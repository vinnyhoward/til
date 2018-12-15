# Render Props

The term ```render props``` refers to the technique for sharing code between React components using a prop whose value is a function.

They are also known as "children as function" or "child as a function". Components that implement this patter can be called "render prop components"

simple example:

```
const ReturnNumber = ({ children }) => children(100)
```

The above snippet receives children as a prop, destructures it from props, and finally it returns it as a function with its following arguments. In this case, it is return the number 100. The above snippet is equal to this snippet below

```
const ReturnNumber = props  => {
  return props.children(100)
}