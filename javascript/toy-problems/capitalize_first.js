// capitalizeFirst 

// Write a recursive function called `capitalizeFirst`. Given an array of strings, capitalize the first letter of each string
// in the array

function capitalizeFirst(arr) {
  let capitalizedArr = []

  for(let i = 0; i < arr.length; i++) {
    capitalizedArr = capitalizedArr.concat(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
  }
  return capitalizedArr;
};

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
