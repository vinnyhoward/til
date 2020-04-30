// Binary Tree Maximum Path Sum
// Given a non-empty binary tree, find the maximum path sum.

// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

// Example 1:

// Input: [1,2,3]

//        1
//       / \
//      2   3

// Output: 6
// Example 2:

// Input: [-10,9,20,null,null,15,7]

//    -10
//    / \
//   9  20
//     /  \
//    15   7

// Output: 42

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxPathSum(root) {
    let max = -Infinity; // Initialize to a very small number to handle a path of negative values
    getMaxSum(root); // Call our recursive fn to start the program

    return max; // Once we have popped out of our recursive calls, `max` contains our maximum path sum

    function getMaxSum(tree) {
        if (tree == null) {
            return 0;
        } // Termination condition

        const leftBranch = Math.max(0, getMaxSum(tree.left)); // calculate the root to leaf sum where root is the left node
        const rightBranch = Math.max(0, getMaxSum(tree.right)); // calculate the root to leaf sum where root is the right node
        const currentPath = leftBranch + tree.val + rightBranch; // Sum the path: left -> root -> right (leaf to leaf)

        max = Math.max(max, currentPath); // if the current path is greater than the previous value of `max`, update `max` to the current path sum
        return tree.val + Math.max(leftBranch, rightBranch);
    }
}
