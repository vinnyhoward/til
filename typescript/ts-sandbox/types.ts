var myString: string;
var myNum: number;
var myBool: boolean;
var myRandomVar: any;

var strArr: string[];
var numArr: number[];
var boolArr: boolean[];

// Alternatives
// var strArr: Array<string>;
// var numArr: Array<number>;
// var boolArr: Array<boolean>;

var strNumTuple: [string, number];
var myVoid: void;
var myNull: null;
var myUndefined: undefined;

// Primitives
myNum = 28;
myBool = true;
myString = `Hello my name is ${myRandomVar} and I am almost ${myNum}`;
myRandomVar = 'Vincent';

strArr = [ 'WordOne', 'Book', 'Hello' ];
numArr = [ 1, 2, 3000 ];
boolArr = [ true, true ];

strNumTuple = [ 'whats up', 85000 ];
myVoid = null;
myNull = null;
myUndefined = undefined;

console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(strArr);
console.log(numArr);
console.log(boolArr);
console.log(myVoid);
