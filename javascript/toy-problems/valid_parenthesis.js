// Instructions
// Output
// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()" => true
// ")(()))" => false
// "(" => false
// "(())((()())())" => true
// Constraints
// 0 <= input.length <=100

// const validParentheses = (parens) => {
//   let splitParent = parens.split('');
//   let isFacing;
// 	parentObj = {};

// 	splitParent.forEach((item) => {
// 		if (!parentObj[item]) parentObj[item] = 0;
//     parentObj[item]++;
//     // if (parentObj[item - 1] != parentObj[item - 1])
// 	});

// 	return Object.values(parentObj)[0] === Object.values(parentObj)[1] ? true : false;
// };

// Review Code, Coudln't figuire it out

const validParentheses = (parens) => {
    let parentheses = '()',
        stack = [],
        i,
        character,
        bracePosition;

    for (i = 0; (character = parens[i]); i++) {
        bracePosition = parentheses.indexOf(character);

        if (bracePosition === -1) {
            continue;
        }
        console.log(bracePosition);
        if (bracePosition % 2 === 0) {
            console.log(stack);
            stack.push(bracePosition + 1); // push next expected brace position
            console.log(stack);
        } else {
            if (stack.length === 0 || stack.pop() !== bracePosition) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(validParentheses('()'));
// =>  true
// console.log(validParentheses(')(()))'));
// // =>  false
// console.log(validParentheses('('));
// // =>  false
// console.log(validParentheses('(())((()())())'));
// //  =>  true
// console.log(validParentheses(')()('));
//  =>  false
