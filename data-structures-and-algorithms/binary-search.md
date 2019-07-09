# Binary Search

A simple approach is to do linear search.The time complexity of above algorithm is O(n). Another approach to perform the same task is using Binary Search.

### Divide and Conquer

```Binary Search```: Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the value is found or the interval is empty. 

### Binary Search: Efficiency  

The idea of binary search is to use the information that the array is sorted and reduce the time complexity to `O(log(n))` which is the worse or average case, while the best case would be `O(1)`. Whenever the size of `n` doubles the amount of steps it takes to find the element is increased by only 1. For example, an `array` with 16 elements within it, will take `4` steps because `2 * 2 * 2 * 2 = 16` and it would only 4 steps or divisions of the array to find the target element. If the size of `n` is 32 then that array is double the size of 16, meaning it will just take one extra step to find the target element.

Example:

![alt text][logo]

[logo]: https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/binary-search1.png "Binary Search"
The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).

_Problem Solving Tip_

![alt text][binarySearchTable]

[binarySearchTable]: https://image.ibb.co/iWwEJU/Screen_Shot_2018_08_24_at_3_49_44_PM.png "Binary Search: Efficiency"

Use tables to find patterns that will ultimately help you in solving and knowing the time notation for the problem, if you absolutely can't solve a problem. Create a results table 

# Identification of main Binary Search Types

## How do we identify a Binary Search?

```Binary Search``` is an algorithm that divides the search space in 2 after every comparison. ```Binary Search``` should be considered every time you need to search for an index or element in a collection. If the collection is unordered, we can always sort it first before applying ```Binary Search```.

## 3 Parts of a Successful Binary Search

Binary Search is generally composed of 3 main sections:

1. Pre-processing - Sort if collection is unsorted.

2. Binary Search - Using a loop or recursion to divide search space in half after each comparison.

3. Post-processing - Determine viable candidates in the remaining space.

Questions to consider when implementing a ```Binary Search```

- Why was it implemented slightly differently?

- What was the developer thinking?

- Which way was easier?

- Which way is better?

## Binary Search Template I

```
def binarySearch(nums, target):
if len(nums) == 0:
    return -1

left, right = 0, len(nums) - 1
while left <= right:
    mid = (left + right) // 2
    if nums[mid] == target:
        return mid
    elif nums[mid] < target:
        left = mid + 1
    else:
        right = mid - 1

# End Condition: left > right
return -1
```
### Key Attributes:

Template #1 is the most basic and elementary form of Binary Search. It is the standard Binary Search Template that most high schools or universities use when they first teach students computer science. Template #1 is used to search for an element or condition which can be determined by accessing a single index in the array.

- Most basic and elementary form of Binary Search
- Search Condition can be determined without comparing to the element's neighbors (or use specific elements around it)
- No post-processing required because at each step, you are checking to see if the element has been found. If you reach the end, then you know the element is not found

## Distinguishing Syntax:

- Initial Condition: ```left = 0, right = length-1```
- Termination: ```left > right```
- Searching Left: ```right = mid-1```
- Searching Right: ```left = mid+1```

## Binary Search Template II

```
def binarySearch(nums, target):

    if len(nums) == 0:
        return -1

    left, right = 0, len(nums)
    while left < right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid

    # Post-processing:
    # End Condition: left == right
    if left != len(nums) and nums[left] == target:
        return left
    return -1

```

Template #2 is an advanced form of Binary Search. It is used to search for an element or condition which requires accessing the current index and its immediate right neighbor's index in the array.

### Key Attributes:

- An advanced way to implement Binary Search.
- Search Condition needs to access element's immediate right neighbor
- Use element's right neighbor to determine if condition is met and decide whether to go left or right
- Gurantees Search Space is at least 2 in size at each step
- Post-processing required. Loop/Recursion ends when you have 1 element left. Need to assess if the remaining element meets the condition.

### Distinguishing Syntax:

- Initial Condition: ```left = 0, right = length```
- Termination: ```left == right```
- Searching Left: ```right = mid```
- Searching Right: ```left = mid+1```