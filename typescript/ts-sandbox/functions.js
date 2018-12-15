function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 4));
var mySum = function (num1, num2) {
    if (typeof num1 == 'string')
        num1 = parseInt(num1);
    if (typeof num2 == 'string')
        num2 = parseInt(num2);
    return num1 + num2;
};
console.log(mySum(30000, '85000'));
var returnName = function (firstName, lastName) {
    if (lastName == undefined)
        return firstName;
    if (firstName == undefined)
        return lastName;
    return firstName + lastName;
};
console.log(returnName('Vince'));
var myVoid = function () {
    return;
};
