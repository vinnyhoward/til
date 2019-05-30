// Anagrams

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

const validAnagram = (arr1, arr2) => {
  if (arr1.length === 0 && arr2.length === 0) return true
  if (arr1.length !== arr2.length) return false

  let gramCounter1 = {};
  let gramCounter2 = {};

  for(let val of arr1) {
    gramCounter1[val] = (gramCounter1[val] || 0) + 1;
  };
  for(let val of arr2) {
    gramCounter2[val] = (gramCounter2[val] || 0) + 1;
  };
  for(let key in gramCounter1) {
    if(gramCounter1[key] !== gramCounter2[key]) return false;
  }

  return true
};

const arr1 = '';
const arr2 = '';
// true
const arr3 = 'aaz';
const arr4 = 'zza';
// false
const arr5 = 'anagram';
const arr6 = 'nagaram';
// true
const arr7 = 'rat';
const arr8 = 'car';
// false

console.log(validAnagram(arr1, arr2));
console.log(validAnagram(arr3, arr4));
console.log(validAnagram(arr5, arr6));
console.log(validAnagram(arr7, arr8));