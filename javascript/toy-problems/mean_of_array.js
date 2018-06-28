// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

let getAverage = marks =>  Math.floor(marks.reduce((x, y) => (x + y))/ (marks.length)) 

console.log(getAverage([2,2,2,2]));
