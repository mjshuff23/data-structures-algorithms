/*
    Write a function `canSum(targetNum, numbers)` that takes in a targetSum and an array of numbers as arguments

    Return a boolean indictating whether or not it is possible to generate targetSum using numbers from the array

    You may use an element of the array as many times as needed

    You may assume that all input numbers are non negative

    canSum(7, [5, 3, 4, 7]) -> true (3 + 4, 7)
    canSum(7, [2, 4]) -> false
*/

// Time - O(m * n) , Space - O(m)
function canSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers)) {
      memo[targetSum] = true;
      return memo[targetSum];
    }
  }
  memo[targetSum] = false;
  return memo[targetSum];
}

console.log(canSum(700, [521, 23, 91]));
console.log(canSum(700, [521, 20, 91]));
