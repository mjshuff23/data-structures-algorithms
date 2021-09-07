/*
    Given two non-empty arrays of integers, write a function that determines if the second array is a subsequence of the first array
    - A subsequence is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array
    - i.e. - [1, 3, 4] is a subsequence of [1, 2, 3, 4]
*/

// Time - O(n), Space - O(1)
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let arrIdx = 0;
  let seqIdx = 0;

  // We want to go until either our array or sequence has been completely iterated through
  while (arrIdx < array.length && seqIdx < sequence.length) {
    // if item at index arrIdx is equal to item in sequence at seqIdx
    // increase seqIdx
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx++;
    }
    // Look to next item in array
    arrIdx++;
  }
  // If we get to the end of our subsequence, we found everything we're looking for
  return seqIdx === sequence.length;
}

let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

console.log(isValidSubsequence(array, sequence));

// Time - O(n), Space - O(1)
function isValidSubsequence2(array, sequence) {
  let seqIdx = 0;

  for (const num of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === num) seqIdx++;
  }

  return seqIdx === sequence.length;
}

console.log(isValidSubsequence2(array, sequence));
