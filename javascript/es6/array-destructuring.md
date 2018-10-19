# Destructuring Assignment

Array Matching
Intuitive and flexible destructuring of Arrays into individual variables during assignment.

## ECMAScript 6

```
var list = [ 1, 2, 3 ]
var [ a, , b ] = list
[ b, a ] = [ a, b ]
```
## ECMAScript 5 (Old way)

```
var list = [ 1, 2, 3 ];
var a = list[0], b = list[2];
var tmp = a; a = b; b = tmp;
```