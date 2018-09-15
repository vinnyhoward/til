# Scoping

```Scope``` is the accessibility of variables, functions, and objects in some particular part of your code during run time. In other words, ```scope``` determines the visibility of variables and other resources in areas of your code.

Advantages of using ```scope``` is that it provides some level of security to your code, common principle of computer security is that users should only have access to the stuff they need at the time. Another advantage besides security, is that it helps track bugs and reduce them, helps solve naming problems when you have variables of the same name but in different scopes.

In the Javascript language there are two types of ```scope```

- Global Scope

- Local Scope

Variables defined inside a function are in local scope while variables defined outside of a function are in the global scope. Each function when invoked creates a new scope.

### Block-Scoped Variables

Block-scoped variables (and constants) without hoisting.

```Let``` can be reassigned and take new value. It creates a mutable variable.

```let``` is the same as ```const``` in that both are blocked-scope. It means that the variable is only available within its scope.

_ECMAScript 6_
```
for (let i = 0; i < a.length; i++) {
    let x = a[i]
    …
}
for (let i = 0; i < b.length; i++) {
    let y = b[i]
    …
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
callbacks[0]() === 0
callbacks[1]() === 2
callbacks[2]() === 4
```
_ECMAScript 5_
```
var i, x, y;
for (i = 0; i < a.length; i++) {
    x = a[i];
    …
}
for (i = 0; i < b.length; i++) {
    y = b[i];
    …
}

var callbacks = [];
for (var i = 0; i <= 2; i++) {
    (function (i) {
        callbacks[i] = function() { return i * 2; };
    })(i);
}
callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;
```
