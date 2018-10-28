# Trailing Commas

Trailing commas (sometimes called "final commas") can be useful when adding new elements, parameters, or properties to JavaScript code. If you want to add a new property, you can simply add a new line without modifying the previously last line if that line already uses a trailing comma. This makes version-control diffs cleaner and editing code might be less troublesome.

JavaScript has allowed trailing commas in array literals since the beginning, and later added them to object literals (ECMAScript 5) and most recently (ECMAScript 2017) to function parameters.

```
var arr = [
  1, 
  2, 
  3, 
];

arr; // [1, 2, 3]
arr.length; // 3

```
If more than one trailing comma is used, an elision (or hole) is produced. An array with holes is called sparse (a dense array has no holes). When iterating arrays for example with Array.prototype.forEach() or Array.prototype.map(), array holes are skipped.


```
var arr = [1, 2, 3,,,];
arr.length; // 5

```

Starting with ECMAScript 5, trailing commas in object literals are legal as well:

```
var object = { 
  foo: "bar", 
  baz: "qwerty",
  age: 42,
};
```