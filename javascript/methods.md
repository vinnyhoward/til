# JavaScript Object Methods

```
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
```

### The this Keyword
In a function definition, ```this``` refers to the "owner" of the function.

In the example above, ```this``` is the person object that "owns" the fullName function.

In other words, ```this.firstName``` means the ```firstName``` property of this ```object```.

### JavaScript Methods

JavaScript methods are actions that can be performed on objects.

A JavaScript method is a property containing a function definition.

### Accessing Object Methods

You access an object method with the following syntax:

```
objectName.methodName()
```

You will typically describe ```fullName()``` as a method of the ```person object```, and ```fullName``` as a property.

The ```fullName property``` will execute (as a function) when it is invoked with ().

This example accesses the ```fullName()``` method of a person object:

```
name = person.fullName();
```

If you access the fullName property, without (), it will return the function definition:
```
name = person.fullName;
```

## Using Built-In Methods

This example uses the toUpperCase() method of the String object, to convert a text to uppercase:

```
var message = "Hello world!";
var x = message.toUpperCase();
```

### Other built-in methods include

dogs.toString();                        // convert to string: results "Bulldog,Beagle,Labrador"

dogs.join(" * ");                       // join: "Bulldog * Beagle * Labrador"

dogs.pop();                             // remove last element

dogs.push("Chihuahua");                 // add new element to the end

dogs[dogs.length] = "Chihuahua";        // the same as push

dogs.shift();                           // remove first element

dogs.unshift("Chihuahua");              // add new element to the beginning

delete dogs[0];                         // change element to undefined (not recommended)

dogs.splice(2, 0, "Pug", "Boxer");      // add elements (where, how many to remove, element list)

var animals = dogs.concat(cats,birds);  // join two arrays (dogs followed by cats and birds)

dogs.slice(1,4);                        // elements from [1] to [4-1]

dogs.sort();                            // sort string alphabetically

dogs.reverse();                         // sort string in descending order

x.sort(function(a, b){return a - b});   // numeric sort

x.sort(function(a, b){return b - a});   // numeric descending sort

highest = x[0];                         // first item in sorted array is the lowest (or highest) value

x.sort(function(a, b){return 0.5 - Math.random()});

The value of x, after execution of the code above will be:

```
HELLO WORLD!
```

### Adding a Method to an Object

```
person.name = function () {
    return this.firstName + " " + this.lastName;
};
```