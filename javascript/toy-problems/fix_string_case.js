// Fix string case

// In this Kata, you will be given a string that may have mixed uppercase 
// and lowercase letters and your task is to convert that string to either 
// lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

const solve = s => {
  const strArr = [...s];
  let upperCount = 0;
  let lowerCount = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].toLowerCase() === strArr[i]) lowerCount++;
    if (strArr[i].toUpperCase() === strArr[i]) upperCount++;
  };

  if (lowerCount === upperCount) return s.toLowerCase();

  return upperCount > lowerCount ? s.toUpperCase() : s.toLowerCase();
};

console.log(solve("coDe")); // = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
console.log(solve("CODe")); // = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
console.log(solve("coDE")); // = "code". Upper == lowercase. Change all to lowercase.
