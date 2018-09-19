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

## Syntactically Anonymous 

It is important to note that arrow functions are anonymous, which means that they are not named.

This anonymity creates some issues:

- Harder to debug

When you get an error, you will not be able to trace the name of the function or the exact line number where it occurred.

- No self-referencing

If your function needs to have a self-reference at any point (e.g. recursion, event handler that needs to unbind), it will not work.

## Main benefit: No binding of ‘this’

In classic function expressions, the this keyword is bound to different values based on the context in which it is called. With arrow functions however, this is lexically bound. It means that it usesthis from the code that contains the arrow function.

For example, look at the setTimeout function below:

```
// ES5
var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(function() {
      console.log(this.id);
    }.bind(this), 1000);
  }
};
```

In the ES5 example, .bind(this) is required to help pass the this context into the function. Otherwise, by default this would be undefined.

```
// ES6
var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
};
```

ES6 arrow functions can’t be bound to a this keyword, so it will lexically go up a scope, and use the value of this in the scope in which it was defined.

## When you should not use Arrow Functions

After learning a little more about arrow functions, I hope you understand that they do not replace regular functions.

Here are some instances where you probably wouldn’t want to use them:

### Object methods

When you call ```cat.jumps```, the number of lives does not decrease. It is because this is not bound to anything, and will inherit the value of this from its parent scope.

```
var cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
}
```

###  Callback functions with dynamic context

If you need your context to be dynamic, arrow functions are not the right choice. Take a look at this event handler below:

```
var button = document.getElementById('press');
button.addEventListener('click', () => {
  this.classList.toggle('on');
});
```

If we click the button, we would get a TypeError. It is because this is not bound to the button, but instead bound to its parent scope.