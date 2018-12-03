// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R
// (inclusive).

// The binary search tree is guaranteed to have unique values.

// Example 1:

// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32
// Example 2:

// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23

// Note:

// The number of nodes in the tree is at most 10000.
// The final answer is guaranteed to be less than 2^31.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var rangeSumBST = (root, L, R) => {
	if (!root) return null;

	if (root.val > R) {
		return rangeSumBST(root.left, L, R);
	} else if (root.val < L) {
		return rangeSumBST(root.right, L, R);
	} else return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
};

const root1 = [ 10, 5, 15, 3, 7, null, 18 ],
	L1 = 7,
	R1 = 15;
const root2 = [ 10, 5, 15, 3, 7, 13, 18, 1, null, 6 ],
	L2 = 6,
	R2 = 10;

console.log(rangeSumBST(root1, L1, R1));
console.log(rangeSumBST(root2, L2, R2));
