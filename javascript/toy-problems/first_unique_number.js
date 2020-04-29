//  First Unique Number
// You have a queue of integers, you need to retrieve the first unique integer in the queue.

// Implement the FirstUnique class:

// FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
// int showFirstUnique() returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
// void add(int value) insert value to the queue.

// Input:
// ["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"]
// [[[2,3,5]],[],[5],[],[2],[],[3],[]]
// Output:
// [null,2,null,2,null,3,null,-1]

// Explanation:
// FirstUnique firstUnique = new FirstUnique([2,3,5]);
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(5);            // the queue is now [2,3,5,5]
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(2);            // the queue is now [2,3,5,5,2]
// firstUnique.showFirstUnique(); // return 3
// firstUnique.add(3);            // the queue is now [2,3,5,5,2,3]
// firstUnique.showFirstUnique(); // return -1

// Input:
// ["FirstUnique","showFirstUnique","add","add","add","add","add","showFirstUnique"]
// [[[7,7,7,7,7,7]],[],[7],[3],[3],[7],[17],[]]
// Output:
// [null,-1,null,null,null,null,null,17]

// Explanation:
// FirstUnique firstUnique = new FirstUnique([7,7,7,7,7,7]);
// firstUnique.showFirstUnique(); // return -1
// firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7]
// firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3]
// firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3,3]
// firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7,3,3,7]
// firstUnique.add(17);           // the queue is now [7,7,7,7,7,7,7,3,3,7,17]
// firstUnique.showFirstUnique(); // return 17

// 1 <= nums.length <= 10^5
// 1 <= nums[i] <= 10^8
// 1 <= value <= 10^8
// At most 50000 calls will be made to showFirstUnique and add.

//  this.cap = capacity;
//  this.queue = [];
//  this.hashMap = new Map;

/**
 * @param {number[]} nums
 */
function FirstUnique(nums) {
    this.queue = [...nums];
    this.hashMap = new Map();

    nums.forEach((int) => {
        if (!this.hashMap.get(int)) this.hashMap.set(int, 0);
        let currentIteration = this.hashMap.get(int);
        currentIteration += 1;

        this.hashMap.set(int, currentIteration);
    });
}

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
    let uniqueInt;

    function getByValue(map, searchValue) {
        for (let [key, value] of map.entries()) {
            if (value === searchValue) return key;
        }
    }
    console.log(this.queue);
    this.queue.forEach((int) => {
        if (this.hashMap.get(int) === 1) {
            uniqueInt = getByValue(this.hashMap, this.hashMap.get(int));
        } else {
            uniqueInt = -1;
        }
        return uniqueInt;
    });
    console.log(this.queue);
    console.log(this.hashMap);
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
    this.queue.push(value);

    let currentIteration = this.hashMap.get(value);
    currentIteration += 1;
    this.hashMap.set(value, currentIteration);
    console.log(this.hashMap);
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */

// const firstUnique = new FirstUnique([7, 7, 7, 7, 7, 7]);
// console.log(firstUnique.showFirstUnique()); // return -1
// firstUnique.add(7); // the queue is now [7,7,7,7,7,7,7]
// firstUnique.add(3); // the queue is now [7,7,7,7,7,7,7,3]
// firstUnique.add(3); // the queue is now [7,7,7,7,7,7,7,3,3]
// firstUnique.add(7); // the queue is now [7,7,7,7,7,7,7,3,3,7]
// firstUnique.add(17); // the queue is now [7,7,7,7,7,7,7,3,3,7,17]
// firstUnique.showFirstUnique(); // return 17

const firstUnique = new FirstUnique([2, 3, 5]);
// console.log(firstUnique.showFirstUnique()); // return 2
firstUnique.add(5); // the queue is now [2,3,5,5]
console.log(firstUnique.showFirstUnique()); // return 2
// firstUnique.add(2);            // the queue is now [2,3,5,5,2]
// firstUnique.showFirstUnique(); // return 3
// firstUnique.add(3);            // the queue is now [2,3,5,5,2,3]
// firstUnique.showFirstUnique(); // return -1
