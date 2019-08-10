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
  let stringArr = s.split(' ');
  let difference;
  let finalArr = [];
  let halfWayMark = false;
  
  for (let i = 0; i < stringArr.length; i++) {
    let curElem = stringArr[i].split(/(!)/).filter(elem => elem !== '');
    let leftHalf = [];
    let rightHalf = [];
    let word = [];

    for (let j = 0; j < curElem.length; j++) {
      let innCurElem = curElem[j]

      if (innCurElem === '!' && !halfWayMark)  leftHalf.push(innCurElem);
      if (innCurElem === '!' && halfWayMark)  rightHalf.push(innCurElem);

      if (innCurElem !== '!') {
        halfWayMark = true;
        word.push(innCurElem);
      }
    };


    if (leftHalf.length > rightHalf.length) {
      difference = leftHalf.length - rightHalf.length;
      leftHalf.splice(0, difference);
    }

    if (rightHalf.length > leftHalf.length) {
      difference = rightHalf.length - leftHalf.length;
      console.log(rightHalf);
      console.log(leftHalf);
      console.log(difference)
      rightHalf.splice(0, difference);
    }
    let composedWord = [...leftHalf, ...word, ...rightHalf]
    finalArr.push(composedWord.join(''));;
  };
  return finalArr.join(' ');
};

// console.log(remove("Hi!"));
// console.log(remove("!Hi! Hi!"));
// console.log(remove("!!Hi! !Hi!!"));
console.log(remove("!!Hi! !Hi!!"));
// console.log(remove("!!Hi!"));
// console.log(remove("!!!!Hi!! !!!!Hi !Hi!!!"));