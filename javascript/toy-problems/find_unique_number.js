// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.


// const findUniq = (arr) => {
//   var uniqueObj = {};

// 	arr.forEach((num) => {
// 		if (!uniqueObj[num]) uniqueObj[num] = 0;
// 		uniqueObj[num]++;
//   });
  
//    Object.keys(uniqueObj).forEach(key => {
//     if (uniqueObj[key] !== 1) delete uniqueObj[key];
//   });

//   return parseInt(Object.keys(uniqueObj)[0])
// }

// const findUniq = (arr) => arr.filter((item) => {
//   return arr.indexOf(item) > 1
// })[0]

// const findUniq = (arr) => {
//   var uniqeObj = Array(200).fill(0);
//   arr.forEach(num => uniqeObj[num] += 1);

//   return arr.filter(num => uniqeObj[num] <= 1)[0]
// }

const findUniq = (arr) =>  arr.filter((item, pos) =>  arr.indexOf(item) === pos)[1]

console.log(findUniq([ 0, 1, 0 ]))
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 3, 10, 3, 3, 3 ]))
console.log(findUniq([ 10, 10, 10, 1, 10 ]))