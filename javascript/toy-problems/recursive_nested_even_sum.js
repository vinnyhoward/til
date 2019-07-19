// nestedEvenSum

// Write a recursive function called nestedEvenSum, returns the sun of all event numbers

function nestedEvenSum(obj) {
  let num = 0;

  const isObject = val => typeof val === 'object' && !Array.isArray(val);

  const findEvenSum = (item) => {
    if (item % 2 === 0) num += item;
  }
  for (item in obj) {
    
    if (isObject(obj[item])) console.log(item)
  }
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {
    b: 2,
    bb: {
      b: 3,
      bb: {
        b: 2
      }
    }
  },
  c: {
    c: {
      c: 2
    },
    cc: 'ball',
    ccc: 5
  },
  d: 1,
  e: {
    e: {
      e: 2
    },
    ee: 'car'
  }
};

console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10
