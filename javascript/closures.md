# Closure

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

Closures have three scope chains:

- Has access to its own scope -- variables defined between its curly brackets
- It has access to the outer function's variables
- It has access to the global variables

simple example: 

```
function outer() {
   var b = 10;
   function inner() {
        
         var a = 20; 
         console.log(a+b);
    }
   return inner;
}
```

Here are two functions:

- A function called ```outer``` which encloses the variable ```b```, and returns the ```inner``` function.

- The ```inner``` function within the ```outer``` function has its own variable called ```a```, and accesses the ```outer``` variable of ```b```. 

- Console logging ```a + b``` is possible because of ```closures```