// Same Frequency

// Write a function called `same`, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same

// ```
// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3,], [1, 9]) // true
// same([1, 2, 1], [4, 4, 1]) // true
// ```

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

console.log(sameFrequency([1, 2, 3], [4, 1, 9])) // true
console.log(sameFrequency([1, 2, 3,], [1, 9])) // false
console.log(sameFrequency([1, 2, 1], [4, 4, 1])) // false
