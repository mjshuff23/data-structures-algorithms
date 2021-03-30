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
console.log(twoNumberSum(array, 19)); // [8, 11]

// Solution 2 - Use a hash map
// Time - O(n), Space - O(n)
function twoNumberSum2(array, targetSum) {
  // Create our hash map object
  const nums = {};
  // Loop through numbers
  for (const num of array) {
    // Store the matching number of `num` in a variable for readability
    const potentialMatch = targetSum - num;
    // If our potentialMatch is in our hash map, return that and the current num of the array
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      // If not, add the current num to our hash map
      nums[num] = true;
    }
  }
  // If we get here, return []
  return [];
}

console.log(twoNumberSum2(array, 19)); // [8, 11]

// Solution 3 - Sort the array and check from outside in
// Time - O(nlog(n)), Space - O(1)
function twoNumberSum3(array, targetSum) {
  // Sort the array
  array.sort((a, b) => a - b);
  // declare where we start
  let left = 0;
  let right = array.length - 1;

  // While we have two different numbers to compare...
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
      // If currentSum is less than what we're looking for, move the left to the right to try and increase our currentSum
    } else if (currentSum < targetSum) {
      left++;
      // If currentSum is more than what we're looking for, move the right to the left to try and decrease our currentSum
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}

console.log(twoNumberSum3(array, 19)); // [8, 11]
