// Group Anagrams
// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

/**
 * @param {string[]} strings
 * @return {string[][]}
 */

const groupAnagrams = (strings) => {
    let anagramHash = {};

    for (let i = 0; i < strings.length; i++) {
        const sortedStr = strings[i].split('').sort().join('');
        const original = strings[i];

        if (!anagramHash[sortedStr]) anagramHash[sortedStr] = [];
        anagramHash[sortedStr].push(original);
    }

    return Object.values(anagramHash);
};

// const groupAnagrams = (strings) => {
//     let anagramHash = {};

//     for (let i = 0; i < strings.length; i++) {
//         if (!anagramHash[strings[i].split('').sort().join('')])
//             anagramHash[strings[i].split('').sort().join('')] = [];
//         anagramHash[strings[i].split('').sort().join('')].push(strings[i]);
//     }

//     return Object.values(anagramHash);
// };

const arr1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

// console.log(groupAnagrams(arr1));
console.log('tea' == 'aet');
