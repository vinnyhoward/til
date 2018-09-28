const harmlessRansomNote = (noteText, magazineText) => {
	let noteArr = noteText.split(' ');
	let magazineArr = magazineText.split(' ');
	var magazineObj = {};

	magazineArr.forEach((word) => {
		if (!magazineObj[word]) magazineObj[word] = 0;
		magazineObj[word]++;
	});

	var noteIsPossible = true;
	noteArr.forEach((word) => {
		if (magazineObj[word]) {
			magazineObj[word]--;
			if (magazineObj[word] < 0) noteIsPossible = false;
		} else noteIsPossible = false;
	});

	return noteIsPossible;
};

console.log(
	harmlessRansomNote(
		'hello jesus',
		"jesus was here one time but now he's not, although he did drop by to say hello one time"
	)
);

console.log(
	harmlessRansomNote(
		'bye bitch',
		"jesus was here one time but now he's not, although he did drop by to say hello one time"
	)
);

console.log(
	harmlessRansomNote(
		'Hungry Fish Doesnt Like Caps',
		"that sucks that the hungry person with the fish doesn't like having his caps up in a bunch"
	)
);

console.log(
	harmlessRansomNote(
		'hungry fish does like caps',
		'thats cool that the hungry person with the fish does like having his caps up in a bunch'
	)
);
