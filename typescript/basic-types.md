# Basic Types

## Introduction

For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, it allows developers support of types. With a convenient enumeration type thrown in to help things along.

## Number

```
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

## String

```
let color: string;
color = 'teal'
```

You can use template strings and embed different values into it without errors being thrown. 

```
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
```

## Boolean

```
let isBool: boolean = false
```