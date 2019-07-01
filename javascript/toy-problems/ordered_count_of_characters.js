// Ordered Count of Characters

// Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = (text) => {
  const countHashMap = {};
  const countArr = [];

  [...text].map(char => {
    if(!countHashMap[char]) countHashMap[char] = 0;
    if(countHashMap[char] || countHashMap[char] === 0) countHashMap[char]++;
  })
  for (let item in countHashMap) {
    countArr.push([item, countHashMap[item]])
  }

  return countArr;
};

// console.log(orderedCount("abracadabra"));
console.log(orderedCount("212"));