# Arguments Object

The `arguments` object is a local variable available within all non-arrow functions. You can refer to a function's arguments inside that function by using its `arguments` object. It has entries for each argument the function was called with, with the first entry's index at 0.

For example, if a function is passed 3 `arguments`, you can access them as follows:

```
arguments[0] // first argument
arguments[1] // second argument
arguments[2] // third argument
```

Each argument is not immutable so it can also be set or reassigned:

```
arguments[1] = 'new value';
```

The `arguments` object is not an `Array`. It is similar, but does not have any Array properties except `length`. For example, it does not have the `pop()` method. However, it can be converted to a real Array:

```
var args = Array.prototype.slice.call(arguments);
// Using an array literal is shorter than above but allocates an empty array
var args = [].slice.call(arguments);
```

As you can do with any Array-like object, you can use ES2015's `Array.from()` method or `spread syntax` to convert arguments to a real Array:

```
var args = Array.from(arguments);
var args = [...arguments];
```