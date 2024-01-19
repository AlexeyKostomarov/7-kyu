//In this kata you must take an input string, reverse the order of the words, and reverse the order of the letters within the words.
//But, as a bonus, every test input will end with a punctuation mark (! ? .) and the output should be returned with the mark at the end.

function esrever(str) {
  const symb = str[str.length - 1];
  const str1 = str.slice(0, -1).split("").reverse().join("");
  return str1 + symb;
}

console.log(esrever("Hello world."));
