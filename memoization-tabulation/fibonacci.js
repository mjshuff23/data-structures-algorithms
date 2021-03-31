/*
    Write a function fib(n) that takes in a number as an argument.  The function should return the n-th number of the Fibonacci Sequence

    The 1st and 2nd number of the sequence is 1.  To generate the next number, you sum up the previous 2
*/

const fib = (n) => {
  if (n <= 2) return 1; // The first two numbers are 1 in the fibonacci
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(6)); // 8
console.log(fib(7)); // 13
