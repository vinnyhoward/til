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

# Multiple Pointers

Creating `pointers` or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition. Very efficient for solving problems with minimal space complexity as well.

Example:

Write a function called `sumZero` which accepts a `sorted` array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

```
sumZero([3, -2, -1, 0, 1, 2, 3]) // [3. -3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined
```

Naive Solution

```
const sumZero = (arr) => {
  for(let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
    if(arr[i] + arr[j] === 0) {
      return [arr[i], arr[j]]
    }
  }
  }
}
```

Refactored Efficient Version

```
const sumZeroAlt = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
      left ++
    };
  };
};
```

# Sliding Window

This pattern involves creating a window which can either be an array or number from one position to another

Depending on a certain condition, the window either increases or closes (and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc.

Example:

Write a function called `maxSubArraySum` which accepts an array of integers and a number called `n`. The function should calculate the maximum sum of `n` consecutive elements in the array.

```
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)
maxSubArraySum([4, 2, 1, 6, 2], 1)
maxSubArraySum([4, 2, 1, 6, 2], 4)
maxSubArraySum([], 4)
```