# Array.Flat()

The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```
const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]
arr.flat() // [1, 2, 3, 4, 5, 6, Array(4)]
arr.flat().flat() // [1, 2, 3, 4, 5, 6, 7, 8, 9, Array(2)]
arr.flat(infinity) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```