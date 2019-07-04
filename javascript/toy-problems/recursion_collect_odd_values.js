
// Helper function 
function collectOddValues(arr) {
  let result = [];

  function oddHelper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);

    oddHelper(helperInput.slice(1));
  };

  oddHelper(arr);

  return result;
};

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 22, 23, 25, 27, 31]));

// Pure Recursion

function collectOddValuesPure(arr) {
  // Store value in array
  let newArr = [];
  // If there is no length return array
  if (arr.length === 0) return newArr;
  // If value is odd, push into array
  if (arr[0] % 2 !== 0) newArr.push(arr[0])
  // Else return a recursive pure function that concats the 
  // newly found value with the value that will be return after 
  // it is finished, while removing 1 element each time.
  newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));

  return newArr;
};

console.log(collectOddValuesPure([1, 2, 3, 4, 5, 6, 22, 23, 25, 27, 31]));