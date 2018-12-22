# Introduction: Classes

Traditional JavaScript uses ```functions``` and ```prototype-based``` inheritance to build up reusable components, but this may feel a bit awkward to programmers more comfortable with an ```object-oriented``` approach, where ```classes``` inherit functionality and ```objects``` are built from these ```classes```.

In ECMAScript 6, JavaScript programmers will be able to build their applications using this ```object-oriented``` class-based approach. In ```TypeScript```, we allow developers to use these techniques now, and compile them down to JavaScript that works across all major browsers and platforms, without having to wait for the next version of JavaScript.

Simple Class example:

```
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```

The syntax should look familiar if you’ve used C# or Java before. We declare a new class Greeter. This class has three members: a property called ```greeting```, a ```constructor```, and a ```method``` greet.

You’ll notice that in the class when we refer to one of the members of the class we prepend this.. This denotes that it’s a member access.

In the last line we construct an instance of the ```Greeter``` class using ```new```. This calls into the ```constructor``` we defined earlier, creating a new ```object``` with the ```Greeter shape```, and running the ```constructor``` to initialize it.

## Inheritance

In TypeScript, we can use common ```object-oriented``` patterns. One of the most fundamental patterns in ```class-based``` programming is being able to extend existing classes to create new ones using ```inheritance```.

Let’s take a look at an example:

```
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```

This example shows the most basic inheritance feature: 

- classes inherit properties and methods from base classes. 

- Dog is a derived ```class``` that derives from the ```Animal``` base class using the ```extends``` keyword. (Derived ```classes``` are often called ```subclasses```, and base classes are often called superclasses)

- Because ```Dog``` extends the functionality from ```Animal```, we were able to create an instance of ```Dog``` that could both ```bark()``` and ```move()```.

Let’s now look at a more complex example: