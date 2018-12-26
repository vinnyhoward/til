// My Answer

const solve = (arr) => {
	var reversedArr = [];
	var directions = [];
	var answerArr = [];

	for (x in arr) {
		var split = arr[x].split(' ');
		var splitWords = split.slice(0, 2);

		directions.push(splitWords);
		reversedArr.push(split.slice(-2).join(' '));
	}

	for (z in directions) {
		for (g in directions[z]) {
			if (directions[z][g] == 'Left') {
				directions[z][g] = 'Right';
			} else if (directions[z][g] == 'Right') {
				directions[z][g] = 'Left';
			}
		}
	}

	var begin = directions.shift().join(' ');
	var firstWord = reversedArr.pop();

	var reversedDirections = directions.reverse();

	console.log(reversedDirections);
	reversedArr.reverse();

	for (y in reversedDirections) {
		var newWord = reversedDirections[y].join(' ');

		answerArr.push((newWord += ' ' + reversedArr[y]));
	}

	answerArr.unshift((begin += ' ' + firstWord));
	return answerArr;
};

// Best Answer
// function solve(arr){
// 	return arr.reverse().map((item, index, arr) => {
// 		if(index === 0) return item.replace(/Left|Right/, 'Begin')
// 		else if(arr[index-1].includes('Right')) return item.replace(/Left|Right|Begin/, 'Left')
// 		else return item.replace(/Left|Right|Begin/, 'Right')
// 	})
// }

// Second Best Answer

// function solve(arr){
// 	let currentDirection,prevDirection;
// 	return arr.reverse().reduce((output,current,index)=>{
// 		let tempData = current.split(' ');
// 		if(index===0)
// 		{
// 			prevDirection = tempData[0]
// 			tempData[0]='Begin';
// 		}
// 		else{
// 			currentDirection =tempData[0];
// 			tempData[0] = prevDirection === 'Right' ? 'Left' : 'Right';
// 		}
// 		if(index!=0)prevDirection = currentDirection;
// 		output.push(tempData.join(' '));
// 		return output;
// 	},[]);
// }

console.log(solve([ 'Begin on 3rd Blvd', 'Right on First Road', 'Left on 9th Dr' ]));
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
