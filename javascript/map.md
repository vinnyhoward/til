# Map()

```Map``` is a collection of keyed data items, just like an ```Object```. But the main difference is that ```Map``` allows keys of any type.

The main methods are:

```new Map()``` – creates the map.
```map.set(key, value)``` – stores the value by the key.
```map.get(key)``` – returns the value by the key, undefined if key doesn’t exist in map.
```map.has(key)``` – returns true if the key exists, false otherwise.
```map.delete(key)``` – removes the value by the key.
```map.clear()``` – clears the map
```map.size``` – returns the current element count.


```
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3
```

As we can see, unlike objects, keys are not converted to strings. Any type of key is possible.

Map can also use objects as keys.

For instance:

```
let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

alert( visitsCountMap.get(john) ); // 123
```