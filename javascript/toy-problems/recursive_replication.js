// Recursive Replication

// You need to design a recursive function called replicate which will receive arguments times and number.

// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should
// return [5,5,5]. If the times argument is negative, return an empty array.

// As tempting as it may seem, do not use loops to solve this problem.

const replicate = (times, number) => {
	if (times < 1) return [];
	else return [ number ].concat(replicate(times - 1, number));
};
console.log(replicate(3, 5), [ 5, 5, 5 ]);
console.log(replicate(5, 1), [ 1, 1, 1, 1, 1 ]);
console.log(replicate(0, 12), []);
console.log(replicate(-1, 12), []);
console.log(replicate(8, 0), [ 0, 0, 0, 0, 0, 0, 0, 0 ]);
