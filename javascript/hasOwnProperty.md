# hasOwnProperty

The ```hasOwnProperty``` method returns a boolean wether or not a value is inside of the object as opposed to inheriting it.

```
const obj = new Object();
obj.color = 'blue';

console.log(obj.hasOwnProperty('color'));
// expected output: true

console.log(obj.hasOwnProperty('someNumber'));
// expected output: false

console.log(obj.hasOwnProperty('Things'));
// expected output: false

```
Unlike the in operator, this method does not check down the object's prototype chain.

```
var myObject = {
   hello: "This is my hello string"
};

if(myObject.hasOwnProperty("hello")){
   // myObject has the hello property
}else{
   // myObject doesn't has hello property
}

// False
var hasPropertyHello = myObject.hasOwnProperty("monkey");

// Use hasOwnProperty in arrays too using the index
["hello"].hasOwnProperty(0); // true
// But no the value
["hello"].hasOwnProperty("hello"); // false
```