// 557. Reverse Words in a String III

// Share
// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  const wordArr = s.split(' ')
  const reverse = wordArr.map(e => {
    return e.split('').reverse().join('')
  })
  return reverse.join(' ')
};

// Solution 1
// Runtime: 84 ms, faster than 85.22% of JavaScript online submissions for Reverse Words in a String III.
// Memory Usage: 42.2 MB, less than 35.29% of JavaScript online submissions for Reverse Words in a String III.


// // Solution 2: Code Golf Version
const reverseWordsAlt = (s) => s.split(' ').map(e =>  e.split('').reverse().join('')).join(' ');
// Runtime: 84 ms, faster than 85.22% of JavaScript online submissions for Reverse Words in a String III.
// Memory Usage: 42.1 MB, less than 51.47% of JavaScript online submissions for Reverse Words in a String III.

const arr1 = "Let's take LeetCode contest";
console.log(reverseWords(arr1));
console.log(reverseWordsAlt(arr1));
