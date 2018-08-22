# Stacks & Queues 


Each is defined by two basic operations: insert a new item, and remove an item. When we insert an item, our intent is clear. But when we remove an item, which one do we choose? The rule used for a ```queue``` is to always remove the item that has been in the collection the most amount of time. This policy is known as first-in-first-out or ```FIFO```. The rule used for a stack is to always remove the item that has been in the collection the least amount of time. This policy is known as last-in first-out or ```LIFO```.

# Stacks

## Pushdown Stacks 

A ```pushdown stack``` (or just a stack) is a collection that is based on the last-in-first-out ```(LIFO)``` policy. When you click a hyperlink, your browser displays the new page (and inserts it onto a stack). You can keep clicking on hyperlinks to visit new pages. You can always revisit the previous page by clicking the back button (remove it from a stack). The last-in-first-out policy offered by a pushdown stack provides just the behavior that you expect.

By tradition, we name the stack insert operation push and the stack remove operation ```pop```. We also include a method to test whether the stack is empty. The following API summarizes the operations:

![alt text][logo]

[logo]: https://introcs.cs.princeton.edu/python/43stack/images/StackApi.png "Stack Detail"

## Python and Stacks

Remember that wonderful Python list we talked about eariler? It turns out that stack functionality is already built into it! 

The Python documentation shows how you can use built-in funtions to turn your Python list into a stack. ```pop()``` is a given function, and ```append()``` is equivalent to a push function. 

# Queues