# Binary Search

A simple approach is to do linear search.The time complexity of above algorithm is O(n). Another approach to perform the same task is using Binary Search.

Binary Search: Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

Example:

![alt text][logo]

[logo]: https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/binary-search1.png "Binary Search"
The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).