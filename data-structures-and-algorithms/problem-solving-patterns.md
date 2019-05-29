# Frequency Patterns

This pattern uses objects or sets to collect values/frequencies of values. This can often help avoid the need for nested loops or O(N^2) operations with arrays/strings

An example:

Write a function called `same`, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same

```
same([1, 2, 3], [4, 1, 9]) // true
same([1, 2, 3,], [1, 9]) // true
same([1, 2, 1], [4, 4, 1]) // true
```

A naive solution with a time complexity of N^2:

```
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}
```

A refactored solution 0(N):

```

const sameFrequency = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let freqCounter1 = {};
  let freqCounter2 = {};

  for(let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  };
  for(let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  };
  for(let key in freqCounter1) {
    if(!(key ** 2 in freqCounter2)) return false;
    if(freqCounter2[key ** 2] !== freqCounter1[key]) return false;
  }
  return true;
};
```

The second solution is much faster then the first solution, the first solution would essentially have a nested loop which causes the time complexity to be `N^2` which is terrible, however the second solution is much more efficient with a time complexity of `O(N)`. The idea behind the frequency counter is to use objects (usually) to help break down the contents of what are you trying to solve such as an array or a string to help quickly compare between two objects.