// Write a function that takes a positive integer n,
// sums all the cubed values from 1 to n(inclusive), and returns that sum.

function sumCubes(n) {
  let x = [];
  for (let i = 1; i <= n; i++) {
    x.push(i * i * i);
  }
  return x.reduce((sum, item) => {
    return (sum += item);
  }, 0);
}
