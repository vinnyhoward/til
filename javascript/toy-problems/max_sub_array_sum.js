// Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
// maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
// maxSubArraySum([4, 2, 1, 6, 2], 1) // 6
// maxSubArraySum([4, 2, 1, 6, 2], 4) // 13
// maxSubArraySum([], 4) //null

// Naive Solution: Time Complexity O(N^2)
const maxSubArraySum = (arr, num) => {
  if (num > arr.length) return null;

  let max = -Infinity;
  for (let i = 0; i < arr.length - num +1; i++) {
    temp = 0;

    for (let j = 0; j < num; j++) temp += arr[i + j];
    if (temp > max) max = temp;
    console.log('temp:', temp, 'max:', max)
  };
  return max;
};

// Efficient Solution: Time Complexity O(N)
const maxSubArraySumAlt = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {

    tempSum = (tempSum - arr[i - num])+ arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  
  return maxSum
};
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySum([4, 2, 1, 6, 2], 1));
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubArraySum([], 4));

console.log(maxSubArraySumAlt([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(maxSubArraySumAlt([1, 2, 5, 2, 8, 1, 5], 4));
// console.log(maxSubArraySumAlt([4, 2, 1, 6, 2], 1));
// console.log(maxSubArraySumAlt([4, 2, 1, 6, 2], 4));
// console.log(maxSubArraySumAlt([], 4));

