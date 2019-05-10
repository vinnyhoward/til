# Array.flatMap()

```
let array = [1, 2, 3, 4, 5];
array.map(x => [x, x * 2]);
```

Becomes:

```
[Array(2), Array(2), Array(2)]
0: (2)[1, 2]
1: (2)[2, 4]
2: (2)[3, 6]
3: (2)[4, 8]
4: (2)[5, 10]
```

Flatten the map again:

```
array.flatMap(v => [v, v * 2]);
[1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
```