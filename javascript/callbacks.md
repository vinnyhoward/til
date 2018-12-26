# Callbacks

```Callbacks``` are functions passed as an ```argument``` to another function to be executed once an event has occurred or a certain task is complete, often used in ```asynchronous``` code. ```Callback``` functions are invoked later by a piece of code but can be declared on initialization without being invoked.

As an example, event listeners are asynchronous callbacks that are only executed when a specific event occurs.

```
const clickMe() {
  console.log("The user clicked on me.")
}
document.addEventListener("click", clickMe)
```
However, ```callbacks``` can also be synchronous. The following map function takes a ```callback``` function that is invoked synchronously for each iteration of the loop (array element).

```
const map = (arr, callback) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i))
  }
  return result
}
map([1, 2, 3, 4, 5], n => n * 2) // [2, 4, 6, 8, 10]

```