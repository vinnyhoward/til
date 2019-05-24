// Square Every Digit

// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

const squareDigits = (num) => {
  const parsedNum = num.toString().split('').map(e => {
    return Math.pow(parseInt(e), 2).toString()
  })
  return parseInt(parsedNum.join(''));
}

const num = 9119;

console.log(squareDigits(num))