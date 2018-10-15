// const removeDuplicates = (n) => Array.from(new Set(n))

// const removeDuplicates = (n) => n.filter((v, i, a) => a.indexOf(v) === i).length

// const removeDuplicates = (n) => {
// 	n = n.sort();

// 	for (i = 0; i < n.length; i++) {
// 		if (n[i] === n[i + 1] || n[i] === n[i - 1]) {
// 			n.splice(n[i + 1], 1);
// 			continue;
// 		}
// 	}

// 	if(n.length === 2 && n[0] === n[1]){
// 	  n.pop()
// 	}

// 	return n;
// };

const removeDuplicates = (n) => {
	n = n.sort();
	for (var i = 0; i < n.length; i++) {
		for (var j = 0; j < n.length; j++) {
			console.log(n[j]);
		}
	}
	return n;
};

let num = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ];
let num1 = [ 1, 1, 1, 1 ];
let num2 = [ 1, 1, 2 ];
let num3 = [ 1, 2, 2, 2 ];

// console.log(removeDuplicates(num));

// console.log(removeDuplicates(num1));

// console.log(removeDuplicates(num2));

console.log(removeDuplicates(num3));
