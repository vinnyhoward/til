// In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

// Example 1:

// Input: N = 2, trust = [[1,2]]
// Output: 2
// Example 2:

// Input: N = 3, trust = [[1,3],[2,3]]
// Output: 3
// Example 3:

// Input: N = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1
// Example 4:

// Input: N = 3, trust = [[1,2],[2,3]]
// Output: -1
// Example 5:

// Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
// Output: 3

// Note:

// 1 <= N <= 1000
// trust.length <= 10000
// trust[i] are all different
// trust[i][0] != trust[i][1]
// 1 <= trust[i][0], trust[i][1] <= N

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge(N, trust) {
    let obj = new Map();
    let count = 0;
    for (let i of trust) {
        if (obj.has(i[0])) {
            let temp = obj.get(i[0]);
            temp.push(i[1]);
            obj.set(i[0], temp);
        } else {
            count += i[0];
            obj.set(i[0], [i[1]]);
        }
    }

    const sumN = sumOfN(N);

    if (sumN == count) return -1;
    let misEle = sumN - count;
    let checker = 0;

    let a = obj.forEach((item) => {
        if (item.indexOf(misEle) == -1) {
            checker = -1;
            return;
        }
    });

    return checker == 0 ? misEle : -1;
}

const sumOfN = (n) => {
    if (n == 0) return 0;
    else return n + sumOfN(n - 1);
};

console.log(findJudge(2, [[1, 2]]));
console.log(
    findJudge(3, [
        [1, 3],
        [2, 3],
    ]),
);
console.log(
    findJudge(3, [
        [1, 3],
        [2, 3],
        [3, 1],
    ]),
);
console.log(
    findJudge(3, [
        [1, 2],
        [2, 3],
    ]),
);
console.log(
    findJudge(4, [
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [4, 3],
    ]),
);
