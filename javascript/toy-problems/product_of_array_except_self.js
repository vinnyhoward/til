// Product of Array Except Self
// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// function productExceptSelf(nums) {
//     const productArr = [];
//     const findProduct = (arr, int) => {
//         return arr
//             .filter((elem, index) => int !== index)
//             .reduce((prev, curVal) => prev * curVal);
//     };

//     for (let i = 0; i < nums.length; i++) {
//         const curInt = i;
//         const copyArr = nums;
//         const finalProduct = findProduct(nums, curInt);
//         productArr.push(finalProduct);
//     }

//     return productArr;
// }

function productExceptSelf(nums) {
    let leftProducts = [];
    let rightProducts = [];
    let finalProduct = [];

    leftProducts[0] = 1;
    rightProducts[nums.length - 1] = 1;

    for (let i = 1; i < nums.length; i++) {
        leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
    }

    for (let j = nums.length - 2; j >= 0; j--) {
        rightProducts[j] = nums[j + 1] * rightProducts[j + 1];
    }

    for (let x = 0; x < nums.length; x++) {
        finalProduct[x] = leftProducts[x] * rightProducts[x]
    }

    return finalProduct;
}

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// 1 ==> [24,2,3,4]
// 2 ==> [1,12,3,4]
// 3 ==> [1,2,8,4]
// 4 ==> [1,2,3,6]

const arr1 = [1, 2, 3, 4];
// Output: [24,12,8,6]
console.log(productExceptSelf(arr1));

// [1, 2, 3, 4]

// [1, 1, 2, 6]
// [24  12, 4, 1]
