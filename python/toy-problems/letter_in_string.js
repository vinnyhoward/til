// let strCount = (str, letter) =>{ 
//   var re = new RegExp(letter, 'g')
//   if(re.test(str) == false ) {
//     return 0
//   } else if(re.length !== null) {
//   return str.match(re).length
//   }
// }

//Better Answer
let strCount = (str, letter) => str.split('').filter(c => c == letter).length

var answer = strCount('Hello', 'e')
console.log(answer);