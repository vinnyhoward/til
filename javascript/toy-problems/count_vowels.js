// My Answer
const getCount = (str) => {
	var split = str.split('');
	var vowelsCount = 0;

	for (i = 0; i < split.length; i++) {
		if (split[i] == 'a' || split[i] == 'e' || split[i] == 'i' || split[i] == 'o' || split[i] == 'u') {
			vowelsCount++;
		}
	}
	return vowelsCount;
};

// Better Answer
// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

console.log(getCount('abracadabra'));
