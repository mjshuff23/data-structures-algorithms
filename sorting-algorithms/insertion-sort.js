// Works from left to right, comparing each position
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    // We start at index 1 because index 0 is considered trivially sorted
    let currentElement = array[i];

    // We start by comparing to the max number of the sorted sub array and working in
    // j >= 0 means only go to the very first index and the number to the right is less than the number to the left, continually decrement
    for (var j = i - 1; j >= 0 && currentElement < array[j]; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = currentElement;
  }

  return array;
}

let example = [5, 10, 1, 3];
insertionSort(example);
console.log(example);
// [5, 1, 3, 2] - first loop: i: array[1] = 1, j: array[0] = 5, j >= 0? T && 1 < 5? T, array[1] = 1

module.exports = {
  insertionSort,
};
