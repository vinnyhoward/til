// Same Frequency

// Write a function called `sameFrequency`, which accepts two positive integers. The function 
// should return true if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// 
// sameFrequency(182, 281); // true
// sameFrequency(34, 14); // false
// sameFrequency(3589578, 5879385); // true
// sameFrequency(22, 222); // false
// 

/**
 * @param {number} num1
 * @param {number} num2
 * @return {boolean}
 */

const sameFrequency = (num1, num2) => {
  let stringArr1 = num1.toString().split('');
  let stringArr2 = num2.toString().split('');

  if (stringArr1.length !== stringArr2.length) return false

  let numHashMap1 = {}
  let numHashMap2 = {}

  let mappedArr1 = stringArr1.map(item => {
    if(!numHashMap1[item]) numHashMap1[item] = item;
  })

  let mappedArr2 = stringArr2.map(item => {
    if(!numHashMap2[item]) numHashMap2[item] = item;
  })

  for (let val in numHashMap1) {
    if (numHashMap1[val] !== numHashMap2[val]) return false
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false