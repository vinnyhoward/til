// How many animals are there?

// From a sentence, deduce the total number of animals.

// For example :

// "I see 3 zebras, 5 lions and 6 giraffes." The answer must be 14

// "Mom, 3 rhinoceros and 6 snakes come to us!" The answer must be 9

// .reduce((a, b) => parseInt(a) + parseInt(b), 0)

const countAnimals = (s) => s.split(' ').filter((y) => parseInt(y)).reduce((a, b) => parseInt(a) + parseInt(b), 0);

console.log(countAnimals('I see 3 zebras, 5 lions and 6 giraffes.'));
// 14 'Live from the Savannah')
console.log(countAnimals('Mom, 3 rhinoceros and 6 snakes come to us!'));
//  9 'Close the car !')
console.log(countAnimals('I do not see any animals here!'));
//  0 'Live from the kitchen'
console.log(countAnimals('ya bkvka nuhi 84 xuy 10 72 cr mr 81 15 42 o 42 5 65'));
// 416
