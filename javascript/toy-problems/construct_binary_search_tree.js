// Construct Binary Search Tree from Preorder Traversal
// Return the root node of a binary search tree that matches the given preorder traversal.

// (Recall that a binary search tree is a binary tree where for every node, any descendant of
// node.left has a value < node.val, and any descendant of node.right has a value > node.val.
// Also recall that a preorder traversal displays the value of the node first, then traverses
// node.left, then traverses node.right.)

// Example 1:
// Input: [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]

// Note:

// 1 <= preorder.length <= 100
// The values of preorder are distinct.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
function bstFromPreorder(preorder) {
    let root = new TreeNode(preorder[0]);
    for (let i = 1; i < preorder.length; i++) {
        appendToTreeNode(root, preorder[i]);
    }
    return root;
}

function appendToTreeNode(root, val) {
    if (val <= root.val) {
        if (root.left) appendToTreeNode(root.left, val);
        else root.left = new TreeNode(val);
    } else {
        if (root.right) appendToTreeNode(root.right, val);
        else root.right = new TreeNode(val);
    }
}

console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]));
// Output: [8,5,10,1,7,null,12]
