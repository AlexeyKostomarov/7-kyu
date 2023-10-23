// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits.

function digits(n) {
	return n.toString().length
}

function quantity(num) {
	const number = num.toString().replace(/[^a-zA-ZА-Яа-яЁё]/gi, '').replace(/\s+/gi, ', ')
	return number.length
}