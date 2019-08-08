// Dashatize it

// Given a number, return a string with dash'-'marks before and after 
// each odd integer, but do not begin or end the string with a dash mark.

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

const dashatize = (num) => {
  if(isNaN(num)) return num.toString();

  const convertToPositive = Math.abs(num);
  const numArr = convertToPositive.toString().split('');
  if (numArr.length == 1) return numArr[0];

  const dashArr = [];

  for (let i = 0; i < numArr.length; i++) {
    let curNum = numArr[i];
    let nextCurNum = numArr[i + 1];

    dashArr.push(curNum) 
    if (i === 0 && curNum % 2 !== 0) dashArr.push('-');
    if (i !== 0 && curNum % 2 !== 0 && nextCurNum) dashArr.push('-');  
    if (i !== 0 && nextCurNum % 2 !== 0 && nextCurNum) dashArr.push('-');  
    if (i === 0 && nextCurNum % 2 !== 0 && nextCurNum) dashArr.push('-');  
  }

  for (let j = 0; j < dashArr.length; j++) {
    let curNum = dashArr[j];
    let nextCurNum = dashArr[j + 1];
    if (curNum === '-' && nextCurNum === '-') dashArr.splice(j, 1)
  }

  return dashArr.join('');
};

// Better Answer
// function dashatize(num) {
//   return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
// };

console.log(dashatize(274))
console.log(dashatize(6815))
console.log(dashatize(3439))
console.log(dashatize(-28369))
console.log(dashatize(NaN))
console.log(dashatize(1))