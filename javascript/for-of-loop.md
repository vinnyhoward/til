# For-of Loop

ES5 back in 2009 introduced ```forEach()``` loops. While nice, they offered no way to ```break```, like for loops always did.

ES2015 introduced the ```for-of``` loop, which combines the conciseness of forEach with the ability to break:

```
//iterate over the value
for (const v of ['a', 'b', 'c']) {
  console.log(v);
}
//get the index as well, using `entries()`
for (const [i, v] of ['a', 'b', 'c'].entries()) {
  console.log(i, v);
}
```