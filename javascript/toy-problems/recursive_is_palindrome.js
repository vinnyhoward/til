// isPalindrome

// Write a recursive function called 'isPalindrome' which returns 
// if the string passed to it is a palindrome (reads the same backwards)
// if not, return false

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(word) {
  let reversedWord = '';
  let wordArr = word.split('');

  function reverseWord(arr) {
    if (arr.length === 0) return;

    reversedWord += arr.pop();
    reverseWord(arr)
  };
  reverseWord(wordArr);
  
  return reversedWord === word ? true : false;
};

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false

