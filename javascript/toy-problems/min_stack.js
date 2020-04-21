/**
 * initialize your data structure here.
 */
const MinStack = function () {
    this.minimum = [];
    this.storage = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    if (
        this.minimum.length === 0 ||
        this.minimum[this.minimum.length - 1] >= x
    ) {
        console.log(x);
        this.minimum.push(x);
    }

    this.storage.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.storage.length === 0) {
        return [];
    }

    if (
        this.storage[this.storage.length - 1] ===
        this.minimum[this.minimum.length - 1]
    ) {
        this.minimum.pop();
    }

    return this.storage.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.storage[this.storage.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minimum[this.minimum.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);
const getMin1 = minStack.getMin();
console.log(getMin1); // --> Returns -3.
const popped = minStack.pop();
console.log(popped);
const getTop = minStack.top();
console.log(getTop); // --> Returns 0.
const getMin2 = minStack.getMin();
console.log(getMin2); // --> Returns -2.
console.log(minStack.storage);
