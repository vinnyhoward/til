// Longest Common Subsequence
// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

// If there is no common subsequence, return 0.

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

// 1 <= text1.length <= 1000
// 1 <= text2.length <= 1000
// The input strings consist of lowercase English characters only.

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// function longestCommonSubsequence(text1, text2) {
//     let count = 0;
//     const hashMap = new Map();

//     for (let i = 0; i < text1.length; i++) {
//         const curChar = text1[i];
//         if (!hashMap[curChar]) hashMap[curChar] = 0;
//         hashMap[curChar]++;
//     }

//     for (let x = 0; x < text2.length; x++) {
//         if (hashMap[text2[x]]) {
//             count++;
//             hashMap[text2[x]]--;
//         }
//     }

//     return count;
// }

function longestCommonSubsequence(text1, text2) {
    const dp = [];
    let m = text1.length;
    let n = text2.length;

    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
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

    console.log(dp[m][n]);
    return dp[m][n];
}

const str1 = 'abcde';
const str2 = 'ace';

const str3 = 'abc';
const str4 = 'abc';

const str5 = 'abc';
const str6 = 'def';

const str7 = 'caoboeld';
const str8 = 'cool';

const str9 = 'ezupkr';
const str10 = 'ubmrapg';
// u r
console.log(longestCommonSubsequence(str1, str2)); // Output: 3
// console.log(longestCommonSubsequence(str3, str4)); // Output: 3
// console.log(longestCommonSubsequence(str5, str6)); // Output: 0
// console.log(longestCommonSubsequence(str7, str8)); // Output: 4
// console.log(longestCommonSubsequence(str9, str10)); // Output: 2
