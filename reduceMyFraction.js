// Write a function which reduces fractions to their simplest form!
// Fractions will be presented as an array / tuple(depending on the language) of strictly
// positive integers, and the reduced fraction must be returned as an array / tuple:

function reduce(fraction) {
  for (let i = fraction[0]; i > 0; i--) {
    if (fraction[0] % i == 0 && fraction[1] % i == 0) {
      const numerator = fraction[0] / i;
      const denominator = fraction[1] / i;
      return [numerator, denominator];
    }
  }
}
