// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]


let scrollingText = text => {
let answerArr = []
let newWord = text.toUpperCase().split('')
answerArr.push(text.toUpperCase())
for(i = 0; i < text.split('').length; i++) {
  if(newWord !== text) {
    let tempWord = newWord.shift() //C
    let temp = newWord.push(tempWord)
    answerArr.push(newWord.join(''))
  }
}
answerArr.pop()
return answerArr
}

console.log(scrollingText("codewars"));


//function scrollingText(text){
//   let result = []
  
//   for( var i = 0; i < text.length; i++){
//     result.push((text.slice(i) + text.slice(0,i)).toUpperCase())
//   }
  
//   return result
// }