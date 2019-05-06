# Space Complexity

The term Space Complexity is misused for `Auxiliary Space` at many places. Following are the correct definitions of `Auxiliary Space` and `Space Complexity`.

`Auxiliary Space` is the extra space or temporary space used by an algorithm.

`Space Complexity` of an algorithm is total space taken by the algorithm with respect to the input size. `Space complexity` includes both `Auxiliary space` and space used by input.

For example, if we want to compare standard sorting algorithms on the basis of space, then `Auxiliary Space` would be a better criteria than `Space Complexity`. Merge Sort uses `O(n)` `auxiliary space`, Insertion sort and Heap Sort use `O(1)` `auxiliary space`. `Space complexity` of all these sorting algorithms is `O(n)` though.

## Space Complexity in Javascript

- Most primitives (booleans, numbers, undefined, null) are constant space

- String require O(n) space (where `n` is the string length)

- Reference types are generally O(n), where `n` is the length (for arrays or the number of keys (for objects).

An example

```
const sum = () => {
  let total = 0; // Takes one number
  for(let i = 0; i < arr.length i++) { // `let i = 0` // Takes one number
    total += arr[i];
  }
  return total;
}
```