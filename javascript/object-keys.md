# Object.keys()

The ```Object.keys()``` method returns an array of a given object's own property names, in the same order as we get with a normal loop.

```
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
```