# Constants

Support for ```constants``` (also known as ````immutable variables```), i.e., variables which cannot be re-assigned new content. Notice: this only makes the variable itself immutable, not its assigned content (for instance, in case the content is an object, this means the object itself can still be altered).

Useful for targeting the selectors. For example, when we have a single button that fires an event, or when you want to select an HTML element in JavaScript, use const instead of var. This is because var is ‘hoisted’. It’s always preferable to use const when don’t want to reassign the variable .

```
const PI = 3.141593
PI > 3.0
```

```
//  only in ES5 through the help of object properties
//  and only in global context and not in a block scope
Object.defineProperty(typeof global === "object" ? global : window, "PI", {
    value:        3.141593,
    enumerable:   true,
    writable:     false,
    configurable: false
})
PI > 3.0;
```

```
// ES5
var MyBtn = document.getElementById('mybtn');

// ES6
const MyBtn = document.getElementById('mybtn)
```

In the above code ```const``` will not change and cannot be reassigned. If you try to give it a new value, it will return an error 