// 665. Non-decreasing Array

// Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

// We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).

// Example 1:
// Input: [4,2,3]
// Output: True
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
// Example 2:
// Input: [4,2,1]
// Output: False
// Explanation: You can't get a non-decreasing array by modify at most one element.
// Note: The n belongs to [1, 10,000].

// Accepted
// 50,514
// Submissions
// 259,380

/**
 * @param {number[]} numArr
 * @return {boolean}
 */
const checkPossibility = (numArr) => {
  let breaker = 0;
  let numLength = numArr.length;

  for (let i = 0; i < numLength; i++) {
    let curr = numArr[i]
    let next = numArr[(i + 1) % numLength]

    console.log(numArr[i])
    // if (curr >= next && breaker >= 1) return false
    if (curr >= next && breaker === 0) {
      numArr[i] = next - 1;
      breaker = 1;
    }
    console.log(numArr[i])
  }

  return true
};

const arr1 = [4, 2, 3];
// Output: True
const arr2 = [4, 2, 1];
// Output: False

// console.log(checkPossibility(arr1));
console.log(checkPossibility(arr2));