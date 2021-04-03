// Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

// The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum

// If there is a tie for the shortest combination, you may return any one of the shortest

// m = targetSum
// n = numbers.length

// Time - O(n^m * m)
// Space - O(m^2)
function bestSum(targetSum, numbers) {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombo = null;

  // Iterates and attempts all branches
  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderCombo = bestSum(remainder, numbers);
    if (remainderCombo) {
      const combination = [...remainderCombo, num];
      if (!shortestCombo || combination.length < shortestCombo.length) {
        shortestCombo = combination;
      }
    }
  }

  return shortestCombo;
}

console.log(bestSum(7, [4, 3, 7])); // [7]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
console.log(bestSum(214, [5, 9, 20, 15, 17, 3, 1])); // null
