//  Uncommon Words from Two Sentences

// We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Return a list of all uncommon words. 

// You may return the list in any order.

// Example 1:

// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet","sour"]

// Example 2:

// Input: A = "apple apple", B = "banana"
// Output: ["banana"]

// Note:

// 0 <= A.length <= 200
// 0 <= B.length <= 200
// A and B both contain only spaces and lowercase letters.

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = (sentOne, sentTwo) => {
    const wordArrOne = sentOne.split(' ');
    const wordArrTwo = sentTwo.split(' '); 
    const wordHash = {};
    const uniqueArr = [];

    wordArrOne.forEach(word => {
		if (!wordHash[word]) wordHash[word] = 0;
		wordHash[word]++;
    });
    
    wordArrTwo.forEach(word => {
		if (!wordHash[word]) wordHash[word] = 0;
		wordHash[word]--;
    });
    
    for (let word in wordHash) {
        if (wordHash[word] === 1 || wordHash[word] === -1) uniqueArr.push(word);
    }
    return uniqueArr;
};

console.log(uncommonFromSentences('apple apple', 'banana'))
console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'))