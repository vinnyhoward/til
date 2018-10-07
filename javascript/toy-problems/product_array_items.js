/**
 * Returns product of all numbers in a numeric array.
 * Returns null if param is null or array is empty.
 * @param {Array} values - The array containing the items.
 */
// const product = (values) => {
//   if (values == null || values.length == 0 ) return null
//   return values.reduce((acum, cur) => acum * cur)
// }

const product = (v) => (!v || v.length == 0 ? null : v.reduce((x, y) => x * y));

console.log(product([ 5, 4, 1, 3, 9 ]));
540;
console.log(product([ -2, 6, 7, 8 ]));
// -672
console.log(product([ 10 ]));
// 10
console.log(product([ 0, 2, 9, 7 ]));
// 0
console.log(product(null));
//  null
console.log(product([]));
// null
