// Making Change
// Write a method make_change (makeChange in JavaScript) that will determine the minimum number of coins needed to make change for a given amount in American currency.

// Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. They'll be represented by the symbols H, Q, D, N and P (symbols in Ruby, strings in JavaScript.

// The argument passed in will be an integer representing the value in cents. The return value should be a hash (an object in JavaScript) with the symbols as keys, and the numbers of coins as values. Coins that are 
// not used should not be included in the hash. If the argument passed in is 0, then the method should return an empty hash.

// Ruby examples:

// make_change(0) --> {}
// make_change(1) --> {:P=>1}
// make_change(43) --> {:Q=>1, :D=>1, :N=>1, :P=>3}
// make_change(91) --> {:H=>1, :Q=>1, :D=>1, :N=>1, :P=>1}
// JavaScript examples:

// makeChange(0) --> {}
// makeChange(1) --> {"P":1}
// makeChange(43) --> {"Q":1,"D":1,"N":1,"P":3}
// makeChange(91) --> {"H":1,"Q":1,"D":1,"N":1,"P":1}
// Elixir examples:

// Currency.make_change(0) --> %{}
// Currency.make_change(1) --> %{:P=>1}
// Currency.make_change(43) --> %{:Q=>1, :D=>1, :N=>1, :P=>3}
// Currency.make_change(91) --> %{:H=>1, :Q=>1, :D=>1, :N=>1, :P=>1}

const makeChange = (amount) => {
  let changeLeft = amount;
  let changeHash = {};

  if (amount === 0) return changeHash;

  if ((changeLeft / 50) >= 1) {
    let curAmountCalc = changeLeft / 50;

    changeHash['H'] = Math.floor(curAmountCalc);
    changeLeft = changeLeft - (50 * changeHash['H']);
  }

  if ((changeLeft / 25) >= 1) {
    let curAmountCalc = changeLeft / 25;

    changeHash['Q'] = Math.floor(curAmountCalc);
    changeLeft = changeLeft - (25 * changeHash['Q']);
  }


  if ((changeLeft / 10) >= 1) {
    let curAmountCalc = changeLeft / 10;

    changeHash['D'] = Math.floor(curAmountCalc);
    changeLeft = changeLeft - (10 * changeHash['D']);
  }

  if ((changeLeft / 5) >= 1) {
    let curAmountCalc = changeLeft / 5;

    changeHash['N'] = Math.floor(curAmountCalc);
    changeLeft = changeLeft - (5 * changeHash['N']);
  }

  if ((changeLeft / 1) >= 1) {
    let curAmountCalc = changeLeft / 1;

    changeHash['P'] = Math.floor(curAmountCalc);
    changeLeft = changeLeft - (1 * changeHash['P']);
  }

  return changeHash
};

console.log(makeChange(0));
console.log(makeChange(1));
console.log(makeChange(5))
console.log(makeChange(43))
console.log(makeChange(91))
console.log(makeChange(100))

const makeChange1 = (amount) => {
  const changeValueArray = [50, 25, 10, 5, 1]    
  let changeHash = { 'H': 0, 'Q': 0, 'D': 0, 'N': 0, 'P': 0 };

  let changeLeft = amount;
  let currChangeIdx = 0;

  if (amount === 0) return {};

  for (let change in changeHash) {
    let changeValue = changeValueArray[currChangeIdx]
    let curAmountCalc = changeLeft / changeValue;

    if ((changeLeft / curAmountCalc) >= 1) {
      
          changeHash[change] = Math.floor(curAmountCalc);
          changeLeft = changeLeft - (changeValue * changeHash[change]);

          currChangeIdx += 1;
        }
        if (changeHash[change] === 0)  delete changeHash[change]
    }
  return changeHash
};

console.log(makeChange1(0));
console.log(makeChange1(1));
console.log(makeChange1(5))
console.log(makeChange1(43))
console.log(makeChange1(91))
console.log(makeChange1(100))

const makeChange2 = (amount) => {
  let H = Math.floor(amount / 50);
  amount -= (50 * H);

  let Q = Math.floor(amount / 25);
  amount -= (25 * Q);

  let D = Math.floor(amount / 10);
  amount -= (10 * D);

  let N = Math.floor(amount / 5);
  amount -= (5 * N);
  console.log(N)
  let changeHash = {H, Q, D, N, P: amount};

  return Object.keys(changeHash).filter(num => changeHash[num]).reduce((obj, num) => {
    obj[num] = changeHash[num]
    return obj
  }, {})
};



console.log(makeChange2(0));
console.log(makeChange2(1));
console.log(makeChange2(5))
console.log(makeChange2(43))
console.log(makeChange2(91))
console.log(makeChange2(100))