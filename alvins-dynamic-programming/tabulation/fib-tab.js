// 0th number is 0, 1st number is 1
function fib(n) {
  // tabulation = building a table
  const tab = Array(n + 1).fill(0);
  tab[1] = 1;
  for (let i = 0; i <= n; i++) {
    tab[i + 1] += tab[i];
    tab[i + 2] += tab[i];
  }
  return tab[n];
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));
