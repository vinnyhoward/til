# string.prototype.matchAll()

If you run a Google search for javascript string match all the first result will be something like: How do I write a regular expression to “match all”?

Top results will suggest using String.match with a regular expression and /g

…or RegExp.exec and/or RegExp.test with /g

First, let’s take a look at how the older spec worked.

String.match with string argument only returns the first match:

```
let string = “Hello”;
let matches = string.match(“l”);
console.log(matches[0]); // "l"
```

Result is single “l” (Note: the match is stored in matches[0] not matches.)

Only “l” is returned from a search for “l” in the word “hello”.

The same goes for using string.match with a regex argument:

Let’s locate “l” character in string “hello” using regular expression /l/:

```
let string = "Hello";
let matches = string.match(/l/);
console.log(matches[0]); // "l"
```

## Add /g to the mix

But String.match with a regular expression and the /g flag does return multiple matches:

```
let string = "Hello";
let ret = string.match(/l/g); // (2) [“l”, “l”];
```

