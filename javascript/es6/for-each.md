# forEach 

The ```forEach()``` method executes a provided function once for each array element.

## forEach Syntax

```
arr.forEach(function callback(currentValue[, index[, array]]) {
    //your iterator
}[, thisArg]);
```

## Description

```forEach()``` initiates the provided ```callback``` once for each element that is in the array in ascending order. It is not invoked for index properties that have been deleted or are uninitialized (i.e. on sparse arrays).

```callback``` is invoked with three arguments:

- the element value
- the element index
- the array being traversed

```callback```
Function to execute for each element, taking three arguments:

```currentValue (Optional)```
The value of the current element being processed in the array.

```index (Optional)```
The index of the current element being processed in the array.

```array (Optional)```
The array that forEach() is being applied to.

```thisArg (Optional)```
Value to use as this (i.e the reference Object) when executing callback.

## forEach vs For Loop

Usually you would loop over elements in an array prior to ES5/ES6:

```
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
```

The```forEach``` method:

```
myArray.forEach(function (value) {
  console.log(value);
});
```

Although shorter, there is one minor drawback: you can’t break out of this loop using a break statement or return from the enclosing function using a return statement.

