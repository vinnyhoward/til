# Search Algorithms 

## How do we search?

Given an array, the more naive approach to filter through an array for the target value is to look at every element in the array and check if its what we want. There are many methods available to you that use common search algorithms fresh out of the box, for example Javascript has:

- indexOf
- includes
- find
- findIndex

Lets take a deep dive on how these algorithms work under the hood.

`indexOf` and `includes` use what is called, `linear search`. Linear search is a very simple search algorithm. In this type of search, a sequential search is made over all items one by one. Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection. 

```
const linearSearch = (arr, target) => {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i
  }
  return -1;
};
```

The time complexity of above algorithm is O(n). Linear search is rarely used practically because other search algorithms such as the binary search algorithm and hash tables allow significantly faster searching comparison to Linear search.