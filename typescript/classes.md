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

## Public, private, and protected modifiers

#### Public by default

In our examples, we’ve been able to freely access the members that we declared throughout our programs. If you’re familiar with classes in other languages, you may have noticed in the above examples we haven’t had to use the word ```public``` to accomplish this

You may still mark a member ```public``` explicitly. We could have written the ```Animal``` class from the previous section in the following way:

```
class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

### Understanding private

When a member is marked ````private```, it cannot be accessed from outside of its containing class. For example:

```
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

new Animal("Cat").name; // Error: 'name' is private;
```

### Understanding protected

The ```protected``` modifier acts much like the ```private``` modifier with the exception that members declared ```protected``` can also be accessed within deriving classes. 

```
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error
```

Notice that while we can’t use ```name``` from outside of ```Person```, we can still use it from within an ```instance``` method of ```Employee``` because ```Employee``` derives from ```Person```.

A ```constructor may``` also be marked ```protected```. This means that the class cannot be instantiated outside of its containing class, but can be extended. For example,

```
class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // Error: The 'Person' constructor is protected
```

### Understanding Readonly modifier

You can make properties ```readonly ```by using the ```readonly``` keyword. ```Readonly``` properties must be initialized at their declaration or in the constructor.

```
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.

```

#### Parameter properties

In our last example, we had to declare a ```readonly``` member name and a constructor parameter ```theName``` in the ```Octopus``` class, and we then immediately set ```name``` to ```theName```. This turns out to be a very common practice. Parameter properties let you create and initialize a member in one place. Here’s a further revision of the previous Octopus class using a parameter property:

```
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}
```

Notice how we dropped ```theName``` altogether and just use the shortened ```readonly name```: string parameter on the constructor to create and initialize the name member. We’ve consolidated the declarations and assignment into one location.

Parameter properties are declared by prefixing a constructor parameter with an accessibility ```modifier``` or ```readonly```, or both. Using ```private``` for a parameter property declares and initializes a ```private member```; likewise, the same is done for ```public```, ```protected```, and ```readonly```.

