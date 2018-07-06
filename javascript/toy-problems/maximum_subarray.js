let largestSum = (arr) => {
	var ans = 0;
	var sum = 0;
	// console.log('A: ', ans, sum);
	for (var i = 0; i < arr.length; i++) {
		// console.log('CurrentVariables: ', ans, sum, 'CurrentIndex: ', arr[i]);
		ans = Math.max(0, ans + arr[i]);
		// console.log('Ans: ', ans);
		sum = Math.max(sum, ans);
		// console.log('Sum: ', sum);
		// console.log('NewVariables : ', ans, sum, 'CurrentIndex: ', arr[i]);
	}
	// console.log('B: ', ans, sum);
	return sum;
};

console.log(largestSum([ 31, -41, 59, 26, -53, 58, 97, -93, -23, 84 ]));
