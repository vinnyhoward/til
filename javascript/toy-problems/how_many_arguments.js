// How many arguments

// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4

function args_count() {
return [].slice.call(arguments).length;
};
console.log(args_count(1, 2, 3)) // -> 3
console.log(args_count(1, 2, 3, 10)) // -> 4

// Other ways to call arguments

// function args_count() {
//   return arguments.length;
// }

// const args_count = (...args) => args.length