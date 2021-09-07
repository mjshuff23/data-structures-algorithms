// m - targetSum, n - numbers.length
// Time - O(n^m * m), Space - O(m)
function howSum(targetSum, numbers) {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult) {
      return [...remainderResult, num];
    }
  }
  return null;
}

console.log(howSum(300, [7, 14]));
