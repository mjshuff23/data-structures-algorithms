/* 
    Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order
*/

const array = [1, 2, 3, 5, 6, 8, 9];
const squaredOutput = [1, 4, 9, 25, 36, 64, 81];

// Solution 1
// Time - O(nlog(n)), Space - O(n)
function sortedSquaredArray(array) {
  // create an array the same size as our input array and fill it with 0's
  const sortedSquares = new Array(array.length).fill(0);

  // Loop through array and square each index
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    sortedSquares[i] = value * value;
  }

  // Sort our squared array
  sortedSquares.sort((a, b) => a - b);
  return sortedSquares;
}

console.log(sortedSquaredArray(array));

// Solution 2
// Time - O(n), Space - O(n)
function sortedSquaredArray2(array) {
  // Create an array of the same size as our input array and fill with 0's
  const sortedSquares = new Array(array.length).fill(0);
  // Start the smallerValueIndex at 0, and the largerValueIndex at the length of array - 1
  let smallerValueIndex = 0;
  let largerValueIndex = array.length - 1;

  // Loop through array backwards
  for (let i = array.length - 1; i >= 0; i--) {
    // Grab smaller and larger values to compare absolute value in case one is negative
    const smallerValue = array[smallerValueIndex];
    const largerValue = array[largerValueIndex];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      // Add to the back of the array
      sortedSquares[i] = smallerValue * smallerValue;
      // Move the smaller value pointer up one
      smallerValueIndex++;
    } else {
      sortedSquares[i] = largerValue * largerValue;
      largerValueIndex--;
    }
  }
  return sortedSquares;
}

console.log(sortedSquaredArray2(array));
