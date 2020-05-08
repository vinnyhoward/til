// Cousins in Binary Tree
// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins.

// Example 1:

// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false
// Example 2:

// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true
// Example 3:

// Input: root = [1,2,3,null,4], x = 2, y = 3
// Output: false

// Note:

// The number of nodes in the tree will be between 2 and 100.
// Each node has a unique integer value from 1 to 100.

var isCousins = function (root, x, y) {
    if (!root || [x, y].includes(root.val)) {
        // if root is x or y, abort
        return false;
    }

    const traverseByLevel = (nodes) => {
        const childrenToParents = {};
        const childNodes = [];

        nodes.forEach((node) => {
            [node.left, node.right].forEach((child) => {
                if (child) {
                    // only add a child if it's not null
                    childrenToParents[child.val] = node.val; // build an object of child -> parent relationships
                    childNodes.push(child); // push children to an array as input for next recursive call
                }
            });
        });

        if (childNodes.length === 0) {
            // if this level of the tree has no children, we've reach the end with no match in sight
            return false;
        }

        const matchX = childrenToParents.hasOwnProperty(x);
        const matchY = childrenToParents.hasOwnProperty(y);
        if ((!matchX && matchY) || (matchX && !matchY)) {
            // if only one target is on this level, they are not cousins
            return false;
        }
        if (matchX && matchY) {
            if (childrenToParents[x] !== childrenToParents[y]) {
                return true; // sup cuz!
            }
            return false; // same parent, so they're siblings, not cousins
        }

        return traverseByLevel(childNodes); // recurse on all children (aka, go down one level)
    };
    return traverseByLevel([root]);
};
