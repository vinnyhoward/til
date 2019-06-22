// Given a `sorted` array of integers, write a function called search, 
// that accepts a value and returns the index where the value passed to the 
// function is located. If the value is not found, return -1

const search = (arr, num) => {
  let min = 0;
  let max = arr.length - 1;
  while(min <= max) {
    let middleNum = Math.floor((min + max) / 2);
    let currElement = arr[middleNum];
    
    if(currElement < num) {
      min = middleNum + 1;
    } else if (currElement > num) {
      max = middleNum - 1;
    } else {
      return middleNum
    }
  };
  return 'IT AIN\'T HERE BRO';
};

console.log(search([1, 2, 3, 4, 5, 6,], 6)) // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)) // 5
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)) // -1
