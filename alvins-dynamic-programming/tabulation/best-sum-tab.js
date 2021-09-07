const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      for (const num of numbers) {
        // Combo is whatever is at table[i] + our current num
        let combo = [...table[i], num];
        // if current combo is less than what is already stored
        if (!table[i + num] || table[i + num].length > combo.length) {
          table[i + num] = combo;
        }
      }
    }
  }

  return table[targetSum];
};

console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
