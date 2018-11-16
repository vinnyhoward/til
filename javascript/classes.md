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

### Class Inheritance

A class can extend another class, and objects initialized using that class inherit all the methods of both classes.

If the inherited class has a method with the same name as one of the classes higher in the hierarchy, the closest method takes precedence:

```
class Programmer extends Person {
  hello() {
    return super.hello() + ' I am a programmer.'
  }
}
const flavio = new Programmer('Flavio')
flavio.hello(
```
The above program prints “Hello, I am Flavio. I am a programmer.”

Classes do not have explicit class variable declarations, but you must initialize any variable in the constructor.

Inside a class, you can reference the parent class calling super().

### Static methods

Normally methods are defined on the instance, not on the class.

Static methods are executed on the class instead:

```
class Person {
  static genericHello() {
    return 'Hello'
  }
}
Person.genericHello() //Hello
```

### Getters and setters
You can add methods prefixed with ```get``` or ```set``` to create a getter and setter, which are two different pieces of code that are execute based on what you are doing: accessing the variable, or modifying its value.

```
class Guy {
  constructor(name) {
    this.name = name
  }
  set name(value) {
    this.name = value
  }
  get name() {
    return this.name
  }
}
```
If you only have a getter, the property cannot be set, and any attempt at doing so will be ignored:

```
class Guy {
  constructor(name) {
    this.name = name
  }
  get name() {
    return this.name
  }
}
```

If you only have a setter, you can change the value but not access it from the outside:

```
class Guy {
  constructor(name) {
    this.name = name
  }
  set name(value) {
    this.name = value
  }
}
```