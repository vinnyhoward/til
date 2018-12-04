# JavaScript Object Prototypes

All JavaScript objects inherit properties and methods from a prototype.

Typical object constructors cannot be added new properties:

```
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

Person.nationality = "English";
```
```Person.nationality = "English";``` this line of code will not work. To add a new property to a constructor, you must add it to the constructor function like so:

```
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}
```

## Enter Prototype Inheritance
All JavaScript objects inherit properties and methods from a ```prototype```.

Date objects inherit from ```Date.prototype```. Array objects inherit from ```Array.prototype```. Person objects inherit from ```Person.prototype```.

The ```Object.prototype``` is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from ```Object.prototype```.

## Adding Properties and Methods to Objects

Sometimes you would want to add new properties or methods to all existing objects of a given type or sometimes you want to add new properties or methods to an object constructor.

You can do so by using the ```prototype``` property.

The JavaScript prototype property allows you to add new properties to object constructors:

```
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";
```

The JavaScript prototype property also allows you to add new methods to objects constructors:

```
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};
```