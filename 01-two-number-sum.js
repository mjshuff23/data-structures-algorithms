// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
// - If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order
// - If no two numbers sum up to the target sum, the function should return an empty array
// - You can not add any number to itself to get the target (i.e. 1 + 1)
// - There will at most be one pair of numbers summing to the target sum

// Example: array = [3, 5, -4, 8, 11, 1, -1, 6]
//          targetSum = 10
// Answer: [11, -1] = 10

// Solution 1 - Two for loops
// Time - O(n^2), Space - O(1)
function twoNumberSum(array, targetSum) {
  // Loop through every index in the array except the last
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    // Start at the number after i, this is why we stop one before the last in the first loop
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      // If these 2 numbers sum to the target, return it in an array
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  // If we get here, return []
  return [];
}

let array = [3, 5, -4, 8, 11, 1, -1, 6];
console.log(twoNumberSum(array, 19));
