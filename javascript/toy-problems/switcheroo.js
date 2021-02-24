// Switcheroo

// Given a string made up of letters a, b, and/or c, switch 
// the position of letters a and b (change a to b and vice versa). 
// Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(str) {
    const hashMap = {
        'a': 0,
        'b': 0
    };
    const splitArr = str.split('');

    splitArr.forEach((char) => {
        if (char === 'a') {
            hashMap[char]++
        } else if (char === 'b') {
            hashMap[char]++
        }
    })

    splitArr.forEach((char, idx) => {
        if (char === 'a') {
            hashMap[char]--
            splitArr[idx] = 'b'
        } else if (char === 'b') {
            hashMap[char]--
            splitArr[idx] = 'a'
        }
    })

    return splitArr.join('');
}

console.log(switcheroo('abc')) // 'bac'
console.log(switcheroo('aaabcccbaaa')) // 'bbbacccabbb'
console.log(switcheroo('ccccc')) // 'ccccc'