const solve = (arr) => {
	var reversedArr = [];
	var directions = [];
	var answerArr = [];

	for (x in arr) {
		var split = arr[x].split(' ');
		var splitWords = split.slice(0, 2).join(' ');
		directions.push(splitWords);
		reversedArr.push(split.slice(-2).join(' '));
	}
	console.log(directions);
	var begin = directions.shift();
	var reversedDirections = directions.reverse();
	console.log(reversedDirections);
	reversedArr.reverse();

	for (y in arr) {
		var split = arr[y].split(' ');
		if (y != 0) {
			answerArr.push((reversedDirections[y] += ' ' + reversedArr[y]));
		}
	}

	return answerArr;
};

// console.log(solve([ 'Begin on 3rd Blvd', 'Right on First Road', 'Left on 9th Dr' ]));
// 'Begin on 9th Dr',
// 'Right on First Road',
// 'Left on 3rd Blvd'
console.log(solve([ 'Begin on Road A', 'Right on Road B', 'Right on Road C', 'Left on Road D' ]));
// // 'Begin on Road D',
// // 'Right on Road C',
// // 'Left on Road B',
// // 'Left on Road A'
// console.log(solve([ 'Begin on Road A' ]));
// //  'Begin on Road A';
