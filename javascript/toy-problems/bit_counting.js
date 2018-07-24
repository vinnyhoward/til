// Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the
// binary representation of that number. Example: The binary representation of 1234 is 10011010010, so the function should
// return 5 in this case

let countBits = (num) => {
	return num.toString(2).split('').reduce(function(count, el) {
		return count + (el == '1');
	}, 0);
};

console.log(countBits());

// let countBits = num => {
//   return num.toString(2).split('').reduce(function(count, el) {
//       return count + (el == "1");
//   }, 0);
// }
