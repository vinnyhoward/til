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

## Linked-List Implementation of a Stack

A linked list is a recursive data structure defined as follows: it is either empty (null) or a reference to a node having a reference to a linked list. The node in this definition is an abstract entity that might hold any kind of data, in addition to the node reference that characterizes its role in building linked lists.

With object-oriented programming, implementing linked lists is not difficult. We start with a class for the node abstraction:

```
class Node:
    def __init__(self, item, next):
        self.item = item 
        self.next = next
```

An object of type Node has two instance variables: ```item``` (a reference to an item) and ```next``` (a reference to another Node object). The next instance variable characterizes the linked nature of the data structure. To emphasize that we are just using the Node class to structure the data, we define no methods other than the constructor. We also omit leading underscores from the names of the instance variables, thus indicating that it is permissible for code external to the data type (but still within our Stack implementation) to access those instance variables.

Now, from the recursive definition, we can represent a linked list with a reference to a Node object, which contains a reference to an item and a reference to another Node object, which contains a reference to an item and a reference to another Node object, and so forth. The final Node object in the linked list must indicate that it is, indeed, the final Node object. In Python, we accomplish that by assigning None to the next instance variable of the final Node object. Recall that None is a Python keyword — a variable assigned the value None references no object.

Linking together a linked list
For example, to build a linked list that contains the items 'to', 'be', and 'or', we execute this code:

```
third  = Node('or', None)
second = Node('be', third)
first  = Node('to', second)
```

# Queues