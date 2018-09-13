# Binary Search Tree

```Binary Search Trees``` also called ```Ordered``` or ```Sorted Binary Trees```. Is a node-based binary tree data structure which has the following properties:

- The left subtree of a node contains only nodes with keys lesser than the node’s key.
- The right subtree of a node contains only nodes with keys greater than the node’s key.
-  The left and right subtree each must also be a binary search tree.
There must be no duplicate nodes.

This data structure that can store a value (strings, numbers, names, etc) in memory. The advantages of using this data structure is fast look-ups, inserts and deletions of elements. Characteristics of ```Binary Search Trees``` including keeping its elements in sorted order. Because of this, look-ups and its operations can use the principle of ```Binary Search```.

When looking for a specific key in a tree, use the methods of ```Binary Search``` which traverses the tree from the ```root``` to their ```leaves```, making comparisons to keys stored in the nodes of the tree and deciding on the basis comparison, to continue searching down the ```left``` or ```right``` sub-trees. On averages, each comparison allows operations to skip about half of the tree.

Because of the breakdown of operations and halving the search, this means that look-up, insertion, and deletion takes time proportional to  O(log n) of times stored in the tree. This is much better then ```Linear Time``` but slower then ```Hash Tables```.

As you can see the time complexity for a ```Binary Search Tree``` is overall, much better then an ```array``` or ```list```

### Binary Search Tree Time Complexity

|               | Average           | Worse Case  |
| ------------- |:-------------:| -----:|
| Space         | O(n)          | O(n) |
| Access        | O(log n)      |   O(n) |
| Search        | O(log n)     |    O(n) |
| insertion        | O(log n)     |    O(n) |
| deletion        | O(log n)     |    O(n) |


### As compared to List (Array)
|               | Average           | Worse Case  |
| ------------- |:-------------:| -----:|
| Space         | O(n)          | O(n) |
| Access        | O(1)      |   O(1) |
| Search        | O(n)     |    O(n) |
| insertion        | O(n)     |    O(n) |
| deletion        | O(n)     |    O(n) |

A height balanced ```Binary Tree``` is more favorable for a ```Binary Tree Search```
