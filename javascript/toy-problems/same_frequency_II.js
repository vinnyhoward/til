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
  let stringArr1 = String(num1).split('');
  let stringArr2 = String(num2).split('');

  if (stringArr1.length !== stringArr2.length) return false

  let freqHashMap1 = {}
  let freqHashMap2 = {}

  stringArr1.map(item => {
    if(!freqHashMap1[item]) freqHashMap1[item] = parseInt(item);
    if(freqHashMap1[item]) freqHashMap1[item] = item++;
  })

  stringArr2.map(item => {
    if(!freqHashMap2[item]) freqHashMap2[item] = parseInt(item);
    if(freqHashMap2[item]) freqHashMap1[item] = item++;
  })

  for (let val in freqHashMap1) {
    if (freqHashMap1[val] !== freqHashMap2[val]) return false
  }

  return true;
}

console.log(sameFrequency(123456, 123756)); // false
console.log(sameFrequency(187, 781)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
console.log(sameFrequency(1000001, 1000000)); // true
console.log(sameFrequency(4444599110, 4594194190)); // true