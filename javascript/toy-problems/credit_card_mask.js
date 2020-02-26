// Usually when you buy something, you're asked whether your credit 
// card number, phone number or answer to your most secret question 
// is still correct. However, since someone could look over your shoulder, 
// you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but 
// the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify("64607935616") == "#######5616"
// maskify("1") == "1"
// maskify("") == ""

// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"
// return masked string

const maskify = (cc) => {
    const charArray = cc.split('');
    const hashLength = charArray.length - 4;

    if (hashLength <= 0) return cc;

    for (let i = 0; i < hashLength; i++) {
        charArray[i] = '#';
    }

    return charArray.join('');
}

console.log(maskify('4556364607935616')) 
// '############5616'
console.log(maskify('1111112345')) 
// // '1'
console.log(maskify('11111')); 
// // '#1111'
console.log(maskify("Skippy"))
// // "##ippy"
console.log(maskify(""))
// // ""