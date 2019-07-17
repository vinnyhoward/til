// Bubble Sort

// Since everybody hates chaos and loves sorted lists 
// we should implement some more sorting algorithms. 
// Your task is to implement a Bubble sort 
// (for some help look at https://en.wikipedia.org/wiki/Bubble_sort) 
// and return a list of snapshots after each change of the initial list.

// e.g.

// If the initial list would be l=[1,2,4,3] my algorithm rotates l[2] and l[3] and after that it adds [1,2,3,4] to the result, which is a list of snapshots.

const bubbleSort = (arr) => {
  const swap = (arry, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  let noSwap;

  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false
      }
    }
    if (noSwap) break;
  }

  return arr
};

const arr1 = [1,2,4,3] // should return [ [1,2,3,4] ]
const arr2 = [2,1,4,3] // should return [ [1,2,4,3], [1,2,3,4] ]
const arr3 = [1,2,3,4] // should return []

console.log(bubbleSort(arr1))
console.log(bubbleSort(arr2))
console.log(bubbleSort(arr3))