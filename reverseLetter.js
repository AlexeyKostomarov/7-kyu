//Given a string str, reverse it and omit all non - alphabetic characters.

function reverseLetter(str) {
	const string = str.split('').reverse().join('')
	return string.replace(/[^a-zA-ZА-Яа-яЁё]/gi, '').replace(/\s+/gi, ', ')
}