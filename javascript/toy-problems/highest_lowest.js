// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// high_and_low("1 2 3 4 5")  // return "5 1"
// high_and_low("1 2 -3 4 5") // return "5 -3"
// high_and_low("1 9 3 4 -5") // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


let highAndLow = n => {
  var numArr = n.split(' ')
  var newArr = numArr.map(num => parseInt(num));

  var smallest =  Math.min.apply(Math, newArr);
  var largest =  Math.max.apply(Math, newArr);
  var answerArr = [largest, smallest]

return answerArr.toString().replace(/,/g, ' ')
}

console.log(highAndLow('-1043 -4115'))


//Better Answer
// function highAndLow(numbers){
//   numbers = numbers.split(' ').map(Number);
//   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }