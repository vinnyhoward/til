# Object.fromEntries()

Transform a list of key & value pairs into an object:

```
let obj = { apple : 10, orange : 20, banana : 30 };
let entries = Object.entries(obj);
entries;
(3) [Array(2), Array(2), Array(2)]
 0: (2) ["apple", 10]
 1: (2) ["orange", 20]
 2: (2) ["banana", 30]
let fromEntries = Object.fromEntries(entries);
{ apple: 10, orange: 20, banana: 30 }
```