function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

function bubbleSort(array) {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      let currentNum = array[i];
      let nextNum = array[i + 1];

      if (nextNum < currentNum) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  }

  return array;
}

const array = [1, 20, 5, 10, 15, 9];
console.log(array);
bubbleSort(array);
console.log(array);
// swap(array, 0, 1);
// swap(array, 0, 3);
// console.log(array);

module.exports = {
  bubbleSort,
  swap,
};
