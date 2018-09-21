# Hoisting

Hoisting is a JavaScript mechanism where variable and function declarations are put into memory during the compile phase. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

However, the value is not hoisted with the declaration.

The following snippet:

```
console.log(hoist)
var hoist = "value"
```
is equivalent to:

```
var hoist
console.log(hoist)
hoist = "value"
```
Therefore logging hoist outputs undefined to the console, not "value".

Hoisting also allows you to invoke a function declaration before it appears to be declared in a program.

```
myFunction() // No error; logs "hello"
function myFunction() {
  console.log("hello")
}
```

But be wary of function expressions that are assigned to a variable:

```
myFunction() // Error: `myFunction` is not a function
var myFunction = function() {
  console.log("hello")
}
```
- Good to hearHoisting is JavaScript’s default behavior of moving declarations to the top

- Functions declarations are hoisted before variable declarations