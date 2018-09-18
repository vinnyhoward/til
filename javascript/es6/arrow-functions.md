# Arrow Functions

An ```arrow function``` expression (also called “fat arrow functions”) has a shorter syntax than a ```function``` expression and does not have its own this, arguments, super, or new.target. These function expressions are best suited for ```non-method functions```, and they cannot be used as constructors. The syntax is much shorter and we are able to omit the curly braces and the return statement due to implicit returns (but only if there is no block)

Two factors influenced the introduction of ```arrow functions```: shorter functions and no existence of ```this``` keyword.
```
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
```

Until ```arrow functions```, every new ```function``` defined its own ```this``` value (based on how ```function``` was called, a new object in the case of a constructor, undefined in strict mode function calls, the base object if the function is called as an "object method", etc.). This proved to be less than ideal with an object-oriented style of programming.

### No Parameters 

```
() => 42
```

You may also choose not to use the parentheses.

```
_ => 42
```

### Single Parameter
With these functions, parentheses are optional:

```
x => 42  || (x) => 42
```

### Multiple Parameters
Parentheses are required for these functions:

```
(x, y) => 42
```

### Statements (as opposed to expressions)

With the ```arrow functions```, it is important to note that statements that need to have curly braces, will need to have a ```return``` as well.

```
var feedTheCat = (cat) => {
  if (cat === 'hungry') {
    return 'Feed the cat';
  } else {
    return 'Do not feed the cat';
  }
}
```

### Object Literals

If you're returning an ```object literal``` you will need to use curly braces upon return. This forces the interpreter to evaluate whats inside the parenthesis, and the object literal is returned.

```
x => ({ y: x })
```

<!-- ## Syntactically Anonymous  -->