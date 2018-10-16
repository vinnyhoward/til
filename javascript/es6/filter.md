# Filter 

```filter()``` creates a new array with elements that fall under a given criteria from an existing array:

## Filter Syntax

```let newArray = arr.filter(callback(element[, index[, array]])[, thisArg])```

## Description

```Filter()``` calls a provided ```callback``` function once for each ```element``` within the ```array``` and constructs a new array of all the values for which ```callback``` returns a value that is equal true. ```Callback``` is invoked only for indexes of the array which have assigned values. It is not invoked for indexes which have been deleted or which have never been assigned values. ```Array elements``` which do not pass the ```callback``` test are simply skipped, and not included within the new array.

```callback```
Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise.
```callback``` is invoked with three arguments:

```element```
The current element being processed in the array.

```index```
The array filter was called upon.

```array```
Optional. Value to use as this when executing callback.



```
var numbers = [1, 3, 6, 8, 11];

var lucky = numbers.filter(function(number) {
  return number > 7;
});

// [ 8, 11 ]
```


The item argument is a reference to the current element in the array as filter() checks it against the condition. This is useful for accessing properties, in the case of objects.

If the current item passes the condition, it gets sent to the new array.

## Filtering an array of objects

A common use case of .filter() is with an array of objects through their properties:

```
var heroes = [
	{name: “Batman”, franchise: “DC”},
	{name: “Ironman”, franchise: “Marvel”},
	{name: “Thor”, franchise: “Marvel”},
	{name: “Superman”, franchise: “DC”}
];

var marvelHeroes =  heroes.filter(function(hero) {
	return hero.franchise == “Marvel”;
});

// [ {name: “Ironman”, franchise: “Marvel”}, {name: “Thor”, franchise: “Marvel”} ]
```