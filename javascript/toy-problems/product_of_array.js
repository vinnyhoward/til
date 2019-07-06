// productOfArray

// Write a function called productOfArray which takes in an array of numbers and
// returns the product of them all

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(n) {
  // declare beginning of product 
  let product = 1;
  // Create helper function
  function productHelper(num) {
    // Return if there is no array left 
    // thus ending the recursive helper function
    if (num.length === 0) return;
    // Assign new product from first element in array
    product = product * num[0];
    // Remove the first element each time
    productHelper(num.splice(1))
  }
  // Invoke helper function until it returns
  productHelper(n);
  // Return product once helper function returns
  return product;
}

// Alternative answer
// function productOfArray(arr) {
//   if(arr.length === 0) {
//       return 1;
//   }
//   return arr[0] * productOfArray(arr.slice(1));
// }

console.log(productOfArray([1,2,3])); // 6
console.log(productOfArray([1,2,3,10])); // 60
console.log(productOfArray([1, 2, 3, 4, 5, 6, 7, 8])); // 40320
console.log(productOfArray([1, 5, 10, 11, 0])); // 0
