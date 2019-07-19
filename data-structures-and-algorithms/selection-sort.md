# Selection Sort

The `selection sort` algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

1) The `subarray` which is already sorted.
2) Remaining `subarray` which is unsorted.

In every iteration of `selection sort`, the minimum element (considering ascending order) from the `unsorted subarray` is picked and moved to the `sorted subarray`.

Following example explains the above steps:

```
const arr = [64 25 12 22 11];

// Find the minimum element in arr[0...4]
// and place it at beginning
11 25 12 22 64

// Find the minimum element in arr[1...4]
// and place it at beginning of arr[1...4]
11 12 25 22 64

// Find the minimum element in arr[2...4]
// and place it at beginning of arr[2...4]
11 12 22 25 64

// Find the minimum element in arr[3...4]
// and place it at beginning of arr[3...4]
11 12 22 25 64 
```

## Pseudo Code

- Store the first element as the smallest value you've seen so far
- Compare this item to the next in the array until you find a smaller number
- If a number is found designate that smaller number to be the new "minimum" and continue until the end of the array.
- If the "minimum" is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the array is sorted

## Javascript Example

```
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var lowest = i;
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) lowest = j;
        }
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
    }
    return arr
};

const arr = [64 25 12 22 11];
selectionSort(arr);
```