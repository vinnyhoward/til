# Tips and tricks to make you a better front end developer

## Truthy & falsy values

Most new Javascript developers may be aware of the built-in data types in Javascript. However, not so many may know about Javascript classification of `truthy` and `falsy` values.

Anytime Javascript expects a `boolean` values, a `truthy` values will behave like `true`, whereas a `falsy` value works like a `false`. These are the `falsy` values:

1.) `0`

2.) `-0`

3.) `null`

4.) `undefined`

5.) ``

6.) `NaN`

7.) `false`

As you can see, an empty string is considered a `falsy` values. All other value besides the above are `truthy` values.

```
// FALSY VALUES

console.log(!!0); // false
console.log(!!-0); // false
console.log(!!''); // false
console.log(!!false); // false
console.log(!!NaN); // false
console.log(!!null); // false
console.log(!!undefined); // false

// TRUTHY VALUES

console.log(!!+Infinity); // true
console.log(!!-Infinity); // true
console.log(!![]); // true
console.log(!!{}); // true
console.log(!!new String('')); // true
console.log(!!new RegExp('')); // true
console.log(!!'Non-empty'); // true
```

Let's say a variable `person` can either contain an `object` or `null`. You can verify that the person variable is not `null`, by using the following conditions:

```
if (person !== null) {...}
```

Considering that `null` is `falsy` while every other object is `truthy`, you can use this (less strict condition)

```
if (person) { ... }
```

## Type conversion: Number and String

One of the most common things you find yourself doing in Javascript is using arithmetic operators: `+`, `-`, `*` and `/`. These operators expect operands that are numbers. So when any of the operands is not a `number`, Javascript implicitly coerces it into a `number`. But there are times when you may not get the result you may be expecting, especially when you are using the `+` operator. This is majorly because the `+` operator is also used for string concatenation. See the following snippet:

```

console.log(100 + 50); // 150
console.log(100 - 50); // 50

console.log('100' + 50); // "10050"
console.log('100' - 50); // 50

console.log(null + 50); // 50
console.log(null - 50); // -50

console.log(void 0 + 50); // NaN
console.log(void 0 - 50); // NaN

console.log(true + 50); // 51
console.log(true - 50); // -49

console.log(false + 50); // 50
console.log(false - 50); // -50

console.log([] + 50); // "50"
console.log([] - 50); // -50

console.log([100] + 50); // "10050"
console.log([100] - 50); // 50

console.log({} + 50); // "[object Object]50"
console.log({} - 50); // NaN

console.log(new Date + 1000); // "Thu May 31 2018 18:27:51 GMT+0100 (WAT)1000"
console.log(new Date - 1000); // 1527787670595
```