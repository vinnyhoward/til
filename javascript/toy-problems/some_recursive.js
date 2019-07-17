// someRecursive

// write a function called `someRecursive` which accepts
// an array and a callback. The function in the array
// returns true when passed to the callback
// Otherwise it returns false

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
const isOdd = val => val % 2 !== 0

const someRecursive = (arr, callback) => {
  for(let i = 0; i < arr.length; i++) {
    let isValid = callback(arr[i]);
    
    if (isValid) return true;
  }
  return false;
};



const arr1 = [1,2,3,4];
const arr2 = [4,6,8,9];
const arr3 = [4,6,8];
const arr4 = [4,6,8];

console.log(someRecursive(arr1, isOdd)); // true
console.log(someRecursive(arr2, isOdd)); // true
console.log(someRecursive(arr3, isOdd)); // false
console.log(someRecursive(arr4, val => val > 10)); // false
