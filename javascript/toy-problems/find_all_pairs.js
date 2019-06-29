// Find all pairs

// You are given array of integers, your task will be to count all pairs in that array and return their count.

// Notes:

// Array can be empty or contain only one value; in this case return 0
// If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
// Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

// Examples
// [1, 2, 5, 6, 5, 2]  -->  2
// ...because there are 2 pairs: 2 and 5

// [1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
// ...because there are 4 pairs: 2, 20, 6 and 2 (again)

const duplicates = (array) => {
  if (array.length === 0 || array.length === 1) return 0; // O(1)
  
  let pairCount = 0; // O(1)
  let hashMap = {}; // O(1)

  array.map(num => {
    if (!hashMap[num]) hashMap[num] = 0; // O(N)
    if (hashMap[num] || hashMap[num] === 0) hashMap[num] = hashMap[num] + 1; // O(N)
  });

  for (let num in hashMap) {
    let tempPairCount = Math.floor(hashMap[num] / 2); // O(N)
    pairCount += tempPairCount; // O(N)
  };
  
  return pairCount; // O(1)
};

console.log(duplicates([1, 2, 5, 6, 5, 2])); // 2;
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])); // 4
console.log(duplicates([0, 0, 0, 0, 0, 0, 0])); // 3
console.log(duplicates([1000, 1000])); //1;
console.log(duplicates([])); // 0
console.log(duplicates([54])); // 0