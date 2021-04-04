// Time - O(n), Space - O(n)

function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(10));
console.log(fibonacci(14));
console.log(fibonacci(15));
console.log(fibonacci(50));
