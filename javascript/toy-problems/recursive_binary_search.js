// Recursive Binary Search

// Given a `sorted` array of integers, write a function called search, 
// that accepts a value and returns the index where the value passed to the 
// function is located. If the value is not found, return -1

const recursiveBinarySearch = (arr, target) => {
  let start = 0;
  let stop = arr.length - 1;
  let mid = Math.floor((start + stop) / 2);

  if (arr[mid] === target) return arr[mid]
  
  
  if (target < arr[mid]) {
    stop = mid - 1;
    return recursiveBinarySearch(arr.slice(start, stop + 1), target)
  }

  if (target > arr[mid]) {
    start = mid + 1;
    return recursiveBinarySearch(arr.slice(start, stop + 1), target)
  }

  return -1;
};

const arr = [ -1, 0, 3, 5, 9, 12 ];
const target = 9;
// Output: 4
const arr1 = [ -1, 0, 3, 5, 9, 12, 14 ];
//  [ -1, 0, 3, 5, 9, 12, 14 ];
const target1 = -1;
// Output: -1
const arr2 = [ 2, 5 ];
const target2 = 5;

const arr3 = [ -1, 0, 3, 5, 9, 12 ];
const target3 = 12;

const arr4 = [ -1, 2, 10, 12, 100, 101 ];
const target4 = 102;

console.log(recursiveBinarySearch(arr, target));
console.log(recursiveBinarySearch(arr1, target1));
console.log(recursiveBinarySearch(arr2, target2));
console.log(recursiveBinarySearch(arr3, target3));
console.log(recursiveBinarySearch(arr4, target4));

