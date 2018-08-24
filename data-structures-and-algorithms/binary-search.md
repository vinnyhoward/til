# Binary Search

A simple approach is to do linear search.The time complexity of above algorithm is O(n). Another approach to perform the same task is using Binary Search.

```Binary Search```: Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the value is found or the interval is empty. 

### Binary Search: Efficiency  

The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log(n)).

Example:

![alt text][logo]

[logo]: https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/binary-search1.png "Binary Search"
The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).



_Problem Solving Tip_

![alt text][binarySearchTable]

[binarySearchTable]: https://image.ibb.co/iWwEJU/Screen_Shot_2018_08_24_at_3_49_44_PM.png "Binary Search: Efficiency"

Use tables to find patterns that will ultimately help you in solving and knowing the time notation for the problem, if you absolutely can't solve a problem. Create a results table 

