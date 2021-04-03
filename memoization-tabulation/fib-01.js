function fibonacci(n) {
  if (n <= 2) return 1; // The first two numbers of fibonacci are 1
  // Every subsequent number is the sum of the previous two
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
