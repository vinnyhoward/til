# Template Literals

```Template literals``` are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "template strings" in prior editions of the ES2015 specification.

```Template Literals``` are enclosed by the back-tick ``` `Hello` ``` character instead of double or single quotes. ```Template Literals``` can contain placeholders. These are signified by the dollar sign and curly braces express ```${Hello}```. The expressions in the placeholders and the text between them get passed to a function. The default function just concatenates the parts into a single string.

Example of ES5:
```
var name = 'John'

console.log('Hello' + name);
```

Example of ES6:
```
console.log(`Hello ${name}`);
```