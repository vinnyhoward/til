//  Remove Outermost Parentheses

// A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

// A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

// Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

// Example 1:

// Input: "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:

// Input: "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation: 
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
// Example 3:

// Input: "()()"
// Output: ""
// Explanation: 
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".

/**
 * @param {string} s
 * @return {string}
 */
const removeOuterParentheses = (s) => {
  const splitArr = s.split('');
  const parentMap = [];
  const numMap = []
  const removedOuterMap = [];
  let parentCount = 0;
  console.log(splitArr)
  for(let i = 0; i < splitArr.length; i ++) {
    if(splitArr[i] === '(') parentMap.push(1);
    if(splitArr[i] === ')') parentMap.push(-1);
  }
  for(let i = 0; i < parentMap.length; i ++) {
    parentCount = parentCount + parentMap[i];
    numMap.push(parentCount);
  }
  console.log(numMap)
  for(let i = 0; i < numMap.length; i ++) {
    if(numMap[i] !== 2 && numMap[i + 1] !== 1) removedOuterMap.push(splitArr[i])
  }

  console.log(splitArr)
  console.log(removedOuterMap)
};

const arr1 = "(()())(())";
const arr2 = "(()())(())(()(()))";
const arr3 = "()()";

console.log(removeOuterParentheses(arr1));
// console.log(removeOuterParentheses(arr2));
// console.log(removeOuterParentheses(arr3));