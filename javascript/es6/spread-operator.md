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

Another use case for the ```Spread Syntax``` is copying an array. A naive approach would be this:

```
var arr = ['a', 'b', 'c']
var arr2 = arr;

Output: ['a', 'b', 'c']
``` 

Now, at first glance, it looks like it worked — it looks like we’ve copied the values of arr into arr2. But that’s not what has happened. You see, when working with objects in javascript (arrays are a type of object) we assign by reference, not by value. This means that arr2 has been assigned to the same reference as arr. In other words, anything we do to arr2 will also affect the original arr array (and vice versa). Take a look below:

```
var arr = ['a', 'b', 'c'];
var arr2 = arr;

arr2.push('d');

console.log(arr);
```

Above, we’ve pushed a new element d into arr2. Yet, when we log out the value of arr, you’ll see that the d value was also added to that array:

```
['a', 'b', 'c', 'd']
```

But we can just use the spread operator.

Consider the code below. It’s almost the same as above. Instead though, we’ve used the spread operator within a pair of square brackets:

```
var arr = ['a', 'b', 'c'];
var arr2 = [...arr];

console.log(arr2);
Output: ['a', 'b', 'c']
```