# Spread Operator (Spread Syntax)

The spread syntax is just simply three dots ```...``` It provides a more concise way to allow an iterable to expand in places where there are more then zero or more arguments(function calls) or elements(for array literals), or even object expressions in places where there are zero or more key-value pairs.

Naive approach to inserting arrays: 

```
var mid = [3, 4];

var arr = [1, 2, mid, 5, 6];
```

The naive approach to inserting to an array, which as you can see does not work and will out put ```[1, 2, [3, 4], 5, 6,]```

But if you were to want only one single array for the values one through six, the spread syntax can help achieve just that. 


Spread syntax approach to inserting arrays: 

```
var mid = [3, 4];

var arr = [1, 2, ...mid, 5, 6];

Output:[1, 2, 3, 4, 5, 6,]
```

Another useful way to use the ```spread syntax``` is for the ```Math``` object, specifically ```Math.max()``` method which works well with integer data types for its arguments as seen below.

```
Math.max();
// -Infinity
Math.max(3, 25, 1);
// 25
Math.max(1000, 30, 423);
// 1000
```

While if you try to apply it to an array, the only way for it work is to use the ```.apply``` method. For example: 

```
var arr = [2, 4, 8, 6, 0];

function max(arr) {
  return Math.max.apply(null, arr);
}

console.log(max(arr));
```

Although it works it is messy and annoying. The more concise approach with the spread syntax is to use:

```
var arr = [2, 4, 8, 6, 0];
var max = Math.max(...arr);

console.log(max);
```

Instead of having to create a function and utilize the ```.apply``` method to return the result of ```Math.max()``` , we only need two lines of code. The ```spread syntax``` expands our array elements and inputs each element in our array individually into the ```Math.max()``` method