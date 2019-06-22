// Given a `sorted` array of integers, write a function called search, 
// that accepts a value and returns the index where the value passed to the 
// function is located. If the value is not found, return -1

const binarySearch = (arr, target) => {
  let min = 0;
  let max = arr.length - 1;
  let middle = Math.floor((min + max) / 2);

  while(arr[middle] !== target && min < max) {
    let currElement = arr[middle];

    if (target > currElement) min = middle + 1;
    if (target < currElement) max = middle - 1;

    middle = Math.floor((min + max) / 2);
  }
  return arr[middle] !== target ? -1 : middle;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6,], 1)) // 3
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)) // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 200, 201, 301, 400], 201)) // 14
console.log(binarySearch([-100, -23, -13, -4, 1, 10, 15, 35, 78, 90, 100, 101, 202, 205, 210, 360, 500], -23)) // 1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)) // -1


// console.log(binarySearch([-100, -23, -13, -4, 1, 10, 15, 35], -23)) // -23