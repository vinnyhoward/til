// isSubsequence - Multiple Pointers

// Write a function called 'isSubsequence' which takes in two strings and checks whether the characters in the first
// string from a subsequence of the characters in the second string. In other words, the function should check whether
// the characters in the first string appear somewhere in the second string, without their order changing.In

// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'abc'); // false (order matters)

// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(N)

const isSubsequence = (str1, str2) => {
  // Assign starting points for str1 for comparisons str2
  let leftStr1 = 0;
  let rightStr1 = str1.length - 1;
  
  // Assign starting points for str2 for comparisons for str1
  let leftStr2 = 0;
  let rightStr2 = str2.length - 1;

  // Start while loop with a base case to stop it
  while(leftStr2 < rightStr2) {
    if (str1[leftStr1] === str1[leftStr1]) {

    }
  };
};

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'abc')); // false (order matters)
