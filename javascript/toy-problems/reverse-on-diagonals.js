// Reverse On Diagonals

// Task
// The longest diagonals of a square matrix are defined as follows:

// the first longest diagonal goes from the top left corner to the bottom right one;
// the second longest diagonal goes from the top right corner to the bottom left one.
// Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals.

// Example
// For

// matrix = [[1, 2, 3],
//             [4, 5, 6],
//             [7, 8, 9]]
// the output should be

// [[9, 2, 7],
//    [4, 5, 6],
//    [3, 8, 1]]
// Input/Output
// [input] 2D integer array matrix

// Constraints: 1 ≤ matrix.length ≤ 10, matrix.length = matrix[i].length, 1 ≤ matrix[i][j] ≤ 1000.

// [output] 2D integer array

// Matrix with the order of elements on its longest diagonals reversed.

function reverseOnDiagonals(matrix) {
	let length = matrix[0].length;
	let count = 0;

	console.log(length);
}

// console.log(reverseOnDiagonals([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]));
// [[9,2,7], [4,5,6],  [3,8,1]]
// console.log(reverseOnDiagonals([ [ 239 ] ]));
// [[239]]
// console.log(reverseOnDiagonals([ [ 1, 10 ], [ 100, 1000 ] ]));
// [[1000,100],  [10,1]]
// console.log(
// reverseOnDiagonals([ [ 43, 455, 32, 103 ], [ 102, 988, 298, 981 ], [ 309, 21, 53, 64 ], [ 2, 22, 35, 291 ] ])
// );
// [[291,455,32,2],  [102,53,21,981],  [309,298,988,64], [103,22,35,43]]
console.log(
	reverseOnDiagonals([ [ 43, 455, 32, 103 ], [ 102, 988, 298, 981 ], [ 309, 21, 53, 64 ], [ 2, 22, 35, 291 ] ])
);
// [[291, 455, 32, 2], [102, 53, 21, 981], [309, 298, 988, 64]
