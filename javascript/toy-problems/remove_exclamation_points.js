// Exclamation marks series #10: Remove some exclamation marks to keep the 
// same number of exclamation marks at the beginning and end of each word

// Description:
// Remove some exclamation marks to keep the same number of exclamation marks 
// at the beginning and end of each word. Words are separated by spaces in the 
// sentence. Please note: only can remove, can not append.

// Examples
// remove("Hi!") === "Hi"
// remove("!Hi! Hi!") === "!Hi! Hi"
// remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
// remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"
// Note
// Please don't post issue about difficulty or duplicate.

function remove(s){
  let stringArr = s.split(' ')
  let resultStr = [];

  const stripAndCompare = (arr) => {
    if (arr.length === 1) resultStr.push(arr[0]);

    let leftArr = [];
    let rightArr = [];

    if (arr[0] === '!') leftArr.push(arr.shift());
    if (arr[arr.length - 1] === '!') rightArr.push(arr.pop())

    if (arr.length !== 1) stripAndCompare(arr);

    if (leftArr.length === rightArr.length && arr.length === 1) {
      return resultStr.push([...leftArr, arr[0], ...rightArr].join(''));
    }
    console.log(arr)
    if (leftArr.length === 1 && rightArr.length === 0 && arr.length === 1) return resultStr.push(arr[0]);
    if (leftArr.length === 0 && rightArr.length === 1 && arr.length === 1) return resultStr.push(arr[0]);
  }

  for (let i = 0; i < stringArr.length; i++) {
    let curElem = stringArr[i].split(/(!)/g).filter(item => item !== '');

    if (curElem.length !== 1) stripAndCompare(curElem);
  }
  return resultStr.join(' ');
}

// console.log(remove("Hi!"));
console.log(remove("!Hi! Hi!"));
console.log(remove("!!Hi! !Hi!!"));
// console.log(remove("!!Hi!"));
// console.log(remove("!!!!Hi!! !!!!Hi !Hi!!!"));