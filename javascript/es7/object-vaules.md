# Object.values()

```Object.values()``` is a new function that’s similar to ```Object.keys()``` but returns all the values of the Object’s own properties excluding any value(s) in the prototypical chain.

## Syntax

```Object.values(obj)```

### Parameters

```obj```: The object whose enumerable own property values are to be returned.

### Return Value

An array containing the given object's own enumerable property values.

Comparing old way vs new way:

```
const cars = { BMw: 'dope', Tesla: 'Sick dude, Porsche: 'Mad Love' }

//ES2015
const vals = Object.keys(cars).map(key => cars[key])
// Output: ['dope', 'Sick dude', 'Mad Love']

const values - Object.values(cars);
// Output: ['dope', 'Sick dude', 'Mad Love']
```