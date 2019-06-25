// Frequency Counter / Multiple Pointers - areThereDuplicates

// Implement a function called "areThereDuplicates" which accepts a variable number of 
// arguments, and checks wether there are any duplicates among the arguments passed in. 
// You can solve this using the frequency counter OR the multiple pointers pattern.

// Examples

// areThereDuplicates(1, 2, 3);
// areThereDuplicates(1, 2, 2);
// areThereDuplicates('a', 'b', 'c', 'a');

// Restrictions
// Cannot use "Set" method

// Time - O(n)
// Space - O(n)

// Bonus

// Time - O(n log n)

function areThereDuplicates() {
  const argsArray = [].slice.call(arguments);
  let hashMap = {};

  argsArray.map(item => {
    if (!hashMap[item]) hashMap[item] = 0;
    if (hashMap[item] || hashMap[item] === 0) hashMap[item] = hashMap[item] + 1;
  })

  for (let item in hashMap) {
    if (hashMap[item] > 1) return true;
  }
  return false
};

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a', 'a'));

// Other Solutions (Frequency Counter)

function areThereDuplicates1() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

console.log(areThereDuplicates1(1, 2, 3));
console.log(areThereDuplicates1(1, 2, 2));
console.log(areThereDuplicates1('a', 'b', 'c', 'a', 'a'));

// (Multiple Pointers)

function areThereDuplicates2(...args) {
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

console.log(areThereDuplicates2(1, 2, 3));
console.log(areThereDuplicates2(1, 2, 2));
console.log(areThereDuplicates2('a', 'b', 'c', 'a', 'a'));

// One Liner Solution
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates3(1, 2, 3));
console.log(areThereDuplicates3(1, 2, 2));
console.log(areThereDuplicates3('a', 'b', 'c', 'a', 'a'));
