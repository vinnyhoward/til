// Recursive Reverse

// Write a recursive function that reverses a string

const recursiveReverse = (str) => {
  let strCache = '';

  function reverseHelper(strArr) {
  if (strArr.length === 0) return;
  if (strArr.length >= 1) strCache += strArr[strArr.length - 1]

  strArr.pop()
  reverseHelper(strArr)
}

  reverseHelper(str.split(''));
  return strCache;
}

console.log(recursiveReverse('awesome')); // 'emosewa'
console.log(recursiveReverse('rithmschool')); // 'loohcsmhtir'
