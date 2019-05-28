"use strict";

const flattenAndSort = (array) => {
  const flat = [];

  array.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flattenAndSort(item));
    } else {
      flat.push(item);
    }
  });

  return flat.sort((item, prev) => item - prev, 0);
}


const arr1 = [[3, 2, 1], [7, 9, 8], [6, 4, 5]];
const arr2 = [[1, 3, 5], [100], [2, 4, 6]];
const arr3 = [];
const arr4 = [[], [1]];

console.log(flattenAndSort(arr3))
// // []
console.log(flattenAndSort(arr4))
// // [1]
console.log(flattenAndSort(arr1));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flattenAndSort(arr2))
// [1, 2, 3, 4, 5, 6, 100]

"use strict";

const flattenAndSortAlt = (array) => [].concat(...array).sort((a,b) => a - b);

console.log(flattenAndSortAlt(arr3))
// // []
console.log(flattenAndSortAlt(arr4))
// // [1]
console.log(flattenAndSortAlt(arr1));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flattenAndSortAlt(arr2))
// [1, 2, 3, 4, 5, 6, 100]