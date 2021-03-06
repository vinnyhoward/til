// Sum of a sequence

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, function should returns 0

// Examples

// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4

const sequenceSum = (begin, end, step) => {
	if (begin > end) {
		return 0;
	}
	return begin + sequenceSum(begin + step, end, step);
};

// console.log(sequenceSum(2, 6, 2));
// console.log(sequenceSum(1, 5, 1));
// console.log(sequenceSum(1, 5, 3));
console.log(sequenceSum(520, 448, 57));
console.log(sequenceSum(0, 15, 3));
// 45

// function sequenceSum(begin, end, step) {
//   if (begin < end) {
//     let sum = 0;

//     while (begin <= end) {
//       sum += begin;
//       begin += step;
//     }

//     return sum;
//   } else {
//     return 0;
//   }
// }
