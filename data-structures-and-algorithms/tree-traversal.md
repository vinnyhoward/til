# Tree Traversal

Unlike linear data structures (Array, Linked List, Queues, Stacks, etc) which have only one logical way to traverse them, trees can be traversed in a variety of different ways. ```Tree traversal``` (also known as tree search) is a form of graph traversal and refers to the process of visiting (checking and/or updating) each node in a tree data structure, exactly once. 

They may be traversed in ```depth-first``` or ```breadth-first``` order. There are three common ways to traverse them in ```depth-first``` order: ```in-order```, ```pre-order``` and ```post-order```

Beyond these basics, there are also more complicated hybrid versions such as ``` depth-limited searches``` and  ```iterative deepening depth-first search```

# Depth First Traversals

These searches are referred to as ```depth-first search``` (DFS), as the search tree is deepened as much as possible on each child before going to the next sibling. For a binary tree, they are defined as display operations recursively at each node, starting with the root, whose algorithm is as follows:

![alt text][logo]

[logo]: https://www.geeksforgeeks.org/wp-content/uploads/2009/06/tree12.gif "Tree"

In-order (Left, Root, Right) : 4 2 5 1 3

Pre-order (Root, Left, Right) : 1 2 4 5 3

Post-order (Left, Right, Root) : 4 5 2 3 1

## In-Order 

1. Check if the current node is empty or null.
2. Traverse the left subtree by recursively calling the in-order function.
3. Display the data part of the root (or current node).
4. Traverse the right subtree by recursively calling the in-order function.

In a ```binary search tree```, in-order traversal retrieves data in sorted order.

## Pre-order (NLR)

1. Check if the current node is empty or null.
2. Display the data part of the root (or current node).
3. Traverse the left subtree by recursively calling the pre-order function.
4. Traverse the right subtree by recursively calling the pre-order function.

## Post-order (LRN)

1. Check if the current node is empty or null.
2. Traverse the left subtree by recursively calling the post-order function.
3. Traverse the right subtree by recursively calling the post-order function.
4. Display the data part of the root (or current node).

