// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

const findShort = (arr) => {
  let count = arr.split('').length;
  const short = arr.split(' ').map(word => {
    if (word.split('').length < count) count = word.split('').length
  })
  return count
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// 3
console.log(findShort("turns out random test cases are easier than writing out basic ones")); 
// 3

// Better Answer
const findShortAlt = (s) => Math.min.apply(null, s.split(' ').map(w => w.length));

console.log(findShortAlt("bitcoin take over the world maybe who knows perhaps"));
// 3
console.log(findShortAlt("turns out random test cases are easier than writing out basic ones")); 
// 3