# Objects 

An object in JavaScript is a collection of key-value pairs just like Python's ```dictionary``` data structure. Each key-value pair is called as a property. A property can be a function, an array, an object itself or any primitive data type i.e. integer, string, etc. Functions in object are called as methods.

Example:

```
var human = {
	firstName: "Vincent",
	lastName: "Howard",
	age: 27,
	fullName: function(){
		return this.firstName + " " + this.lastName		
	}
}
```

Here firstName, lastName, and fullName are properties of the same object i.e. human. firstName is the key and Virat is the value of the property.

Properties of the object can be accessed using the following two notations:
```
human.firstName; //Output: Vincent

human.fullName(); //Output: Howard
```

New properties can be added using the dot notation as shown below:

```
human.age = 25
human.getAge = function(){
	return this.age;
}
```

Square bracket notation:

```
human["firstName"]; //Output: Vincent

human["fullName"](); //Output: Vincent Howard
```

New properties can be added using the Square bracket notation as shown below:

```
human["weight"] = 65
human.getWeight = function(){
	return this.weight;
}
```

Properties can also be accessed using a variable having value equal to the property name as shown below

```
var firstNameProperty = "firstName";

console.log(human[firstNameProperty]) // Output: Vincent
```

Note: Above method of using variable to access property names cannot be used to access properties of the object using dot notation.

```
Console.log(human.firstNameProperty) //Output: undefined
```

An object property name can be any valid JavaScript string, or anything that can be converted to a string, including the empty string. However, any property name that is not a valid Javascript identifier (for example, a property name that has a space or a hyphen, or that starts with a number) can only be accessed and added to the object property using the square bracket notation

```
human["date of birth"] = "January 7";
human[12] = 12;
human.12 = 12; //gives error

console.log(human.12); //Gives error
console.log(human[12]); //Output: 12
```
## Delete a property from an object

To delete a property from an object we can use the delete operator. You cannot delete properties that were inherited, nor can you delete properties with their attributes set to configurable.

‘delete’ operator returns true if the delete was successful. It also return true if the property to delete was non-existent or the property could not be deleted.

```
delete human.firstName; // return true
```