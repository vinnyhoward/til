# Classes

JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.

## Defining classes

Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: ```class expressions``` and ```class declarations```.

### Class Declarations
One way to define a class is using a ```class declaration```. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).

```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

## Hoisting

An important difference between ```function declarations``` and ```class declarations``` is that ```function declarations``` are hoisted and ```class declarations``` aren't. You first need to declare your class and then access it, otherwise code like the following will throw a ```ReferenceError```

```
const p = new Rectangle(); // ReferenceError

class Rectangle {}
```

### Class Expressions

A ```class expression``` is another away to define a class. ```class expressions``` can be named or unnamed. The name given to a named class is local the the class's body.

```
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle"

// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle2"
```