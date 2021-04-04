function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        [array[j], array[i]] = [array[i], array[j]];
      }
    }
  }
  return array;
}

const array = [10, 5, 20, 9, 2, 11, 100];
selectionSort(array);
console.log(array);

module.exports = {
  selectionSort,
};
