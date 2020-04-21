// Last Stone Weight
// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

// Example 1:
// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

// Note:

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

/**
 * @param {number[]} stones
 * @return {number}
 */

// function lastStoneWeight(stones) {
//     // Find two largest integers in array where x <= y
//     function sortAndSmashStones(intArr) {
//         intArr.sort((a, b) => b - a, 0);

//         if (intArr[0] === intArr[1]) intArr.splice(2);
//         else {
//             const intDiff = intArr.splice(0, 1) - intArr.splice(0, 1);
//         }
//         console.log(intArr);
//         if (intArr.length === 1) return stones[0];
//         else return 0;

//         return sortAndSmashStones(intArr);
//     }
//     // Find the difference of the two integers (y - x)
//     // If only one integer in array return
//     return sortAndSmashStones(stones);
//     // recursively breakdown array of integers with steps above - last step stopping the recursion
// }

function lastStoneWeight(stones) {
    function sortAndSmashStones(intArr) {
        intArr.sort((a, b) => b - a, 0);

        if (intArr.length === 1) return intArr[0];
        if (intArr.length === 2) return intArr[0] - intArr[1];

        if (intArr[0] === intArr[1]) intArr = intArr.slice(2);

        else {
            const intDiff = intArr.splice(0, 1) - intArr.splice(0, 1);
            intArr.push(intDiff);
        }
        if (intArr.length === 1) return sortAndSmashStones(intArr);
        return intArr.length ? intArr[0] : 0;
    }

    return sortAndSmashStones(stones);
}

console.log(lastStoneWeight([10,4,2,10]));
// console.log(lastStoneWeight([2, 2]));
// console.log(lastStoneWeight([2,7,4,1,8,1]))

var lastStoneWeight = function(stones) {
    while(stones.length > 1) {
        stones = stones.sort((a,b) => b-a); 
        if(stones[0] === stones[1]) {
            stones = stones.slice(2);
        } else {
            stones[1] = stones[0] - stones[1];
            stones = stones.slice(1).sort((a,b) => b-a);
        }
        
    }
    return stones.length ? stones[0]: 0
};