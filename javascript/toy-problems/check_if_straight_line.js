// Check If It Is a Straight Line
// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// Example 1:

// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
// Example 2:

// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false

// Constraints:

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    // any line of 2 or fewer points is straight
    if (coordinates.length <= 2) return true;

    let last_slope = calculate_slope(coordinates[0], coordinates[1]);
    for (let i = 2; i < coordinates.length; i++) {
        const current_slope = calculate_slope(
            coordinates[i - 1],
            coordinates[i],
        );
        if (current_slope != last_slope) return false;
    }
    return true;
};

function calculate_slope(point_a, point_b) {
    // slope formula is: m = (y1 - y2)/(x1 - x2)
    return (point_a[1] - point_b[1]) / (point_a[0] - point_b[0]);
}
