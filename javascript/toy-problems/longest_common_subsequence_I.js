// LeetCode #1143

// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

 

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.
 

// Constraints:

// 1 <= text1.length, text2.length <= 1000
// text1 and text2 consist of only lowercase English characters.
// Accepted

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 function longestCommonSubsequence(text1, text2) {
    const dp = [];
    let text1Length = text1.length;
    let text2Length = text2.length;

    for (let i = 0; i <= text1Length; i++) {
        dp[i] = new Array(text2Length + 1).fill(0);
    }

    for (let i = 1; i <= text1Length; i++) {
        for (let j = 1; j <= text2Length; j++) {
            // two  possible scenarioes:
            // 1. the current char of text1 and text2 does not match
            // 2. the current char of text1 and text2 matches

            if (text1.charAt(i - 1) != text2.charAt(j - 1)) {
                // check left and top for longer subsequence length
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            } else {
                // check diag for prev longest subsequence length and add 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
        }
    }

    console.log(dp[text1Length][text2Length]);
    return dp[text1Length][text2Length];
}

const text1 = "abcde";
const text2 = "ace";
// Explanation: The longest common subsequence is "ace" and its length is 3.
console.log(longestCommonSubsequence(text1, text2));
const text3 = "abc";
const text4 = "abc";
// Explanation: The longest common subsequence is "abc" and its length is 3.
console.log(longestCommonSubsequence(text3, text4))
const text5 = "abc";
const text6 = "def";
// Explanation: There is no such common subsequence, so the result is 0.
console.log(longestCommonSubsequence(text5, text6))