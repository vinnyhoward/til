// Maximal Square
// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example:

// Input:

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// Output: 4

/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalSquare(matrix) {
    let max = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === '0') continue;
            if (i > 0 && j > 0)
                matrix[i][j] =
                    Math.min(
                        matrix[i - 1][j],
                        matrix[i][j - 1],
                        matrix[i - 1][j - 1],
                    ) + 1;
            max = Math.max(matrix[i][j], max);
        }
    }
    return max ** 2;
}

const matrix = [
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0],
];

console.log(maximalSquare(matrix));
