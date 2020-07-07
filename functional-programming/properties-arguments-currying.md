# Properties, Arguments and Currying

### Associative

```js
add(add(x, y), z) === add(x, add(y, z));
```

### Commutative

```js
add(x, y) === add(y, x);
```

### Identity

```js
add(multiply(x, y), multiply(x, z)) === multiply(x, add(y, z));
```
