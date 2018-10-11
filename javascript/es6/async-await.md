# Async/Await

Theres a special syntax or syntactical sugar to work with promises in a more comfortable fashion, called ```async/await```. It is really to understand and implement.

## Async Functions

The ```async``` keyword can be placed right before a function:

```
async function addition(x, y) {
  return x + y
}
```
The word ```async``` just simply means that the function will aways return a ```promise```. If the code has ```return <non-promise>``` in it, then JavaScript automatically wraps it into a resolved promise with that value.

For instance, the code above returns a resolved promise with the result of the addition of the two arguments.