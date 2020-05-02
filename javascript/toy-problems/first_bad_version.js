// First Bad Version
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Example:

// Given n = 5, and version = 4 is the first bad version.

// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true

// Then 4 is the first bad version.

function solution(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        // Initialize the minimum
        let min;
        // Initialize "start" to 1 because the versions will always start at 1
        let start = 1;
        // Initialize "end" to n; the last number
        let end = n;

        // while loop that breaks when "start" greater than the "end"
        while (start <= end) {
            // Initialize "mid" to the middle of the versions; which is 3 and then 4
            const mid = Math.floor((start + end) / 2);
            console.log('mid:', mid);
            if (isBadVersion(mid)) {
                // If "mid" is the bad version than the "min" will be assigned "mid" which is 3 and then 4
                min = mid;
                console.log('min:', min);
                end = mid - 1;
                console.log('end:', end);
            } else {
                start = mid + 1;
            }
        }
        return min;
    };
}

// Mocked out isBadVersion that resolves if the number is greater than or equal to 4
const isBadVersion = (int) => int >= 2;

console.log(solution(isBadVersion)(10));
