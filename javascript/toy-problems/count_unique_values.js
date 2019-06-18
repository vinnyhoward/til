// Multiple Pointers - countUniqueValues

// Implement a function called countUniqueValues which accepts a sorted array, 
// and counts the unique values in the array. There can be negative numbers in 
// the array, but it will always be sorted

// Time Complexity - O(n)
// Space Complexity - O(n)

const countUniqueValues = (arr) => {
  let i = 0;
  for(var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    };
  };
  return i + 1;
};

const arr1 = [1, 1, 1, 1, 1, 2];
const arr2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
const arr3 = [];
const arr4 = [-2 ,-1, -1, 0, 1];

console.log(countUniqueValues(arr1));
console.log(countUniqueValues(arr2));
console.log(countUniqueValues(arr3));
console.log(countUniqueValues(arr4));