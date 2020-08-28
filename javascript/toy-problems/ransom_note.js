// Ransom Note
// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
    const charObject = {};

    [...ransomNote].forEach((char) => {
        console.log(char);
        if (!charObject[char]) charObject[char] = 0;
        charObject[char]++;
    });

    [...magazine].forEach((char) => {
        if (charObject[char]) charObject[char]--;
    });

    for (value in charObject) {
        if (charObject[value] !== 0) return false;
    }

    return true;
}

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));
console.log(canConstruct('windows', 'manwpioovwsd'));
console.log(canConstruct('fihjjjjei', 'hjibagacbhadfaefdjaeaebgi'));
