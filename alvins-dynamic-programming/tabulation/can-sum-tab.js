function canSum(targetSum, numbers) {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      for (let num of numbers) {
        if (table[i + num] < table.length) table[i + num] = true;
      }
    }
  }

  return table[targetSum];
}

console.log(canSum(7, [5, 3, 4]));
