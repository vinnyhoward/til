function getSum(num1: number, num2: number): number {
	return num1 + num2;
}

console.log(getSum(1, 4));

const mySum = (num1: any, num2: any): number => {
	if (typeof num1 == 'string') num1 = parseInt(num1);
	if (typeof num2 == 'string') num2 = parseInt(num2);

	return num1 + num2;
};

console.log(mySum(30000, '85000'));

const returnName = (firstName?: string, lastName?: string): string => {
	if (lastName == undefined) return firstName;
	if (firstName == undefined) return lastName;
	return firstName + lastName;
};

console.log(returnName('Vince'));

const myVoid = (): void => {
	return;
};
