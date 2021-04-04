// Time - O(n*m)
// Space - O(n*m)
function gridTraveler(m, n) {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;

  for (let row = 0; row <= m; row++) {
    for (let column = 0; column <= n; column++) {
      const current = table[row][column];
      if (column + 1 <= n) table[row][column + 1] += current;
      if (row + 1 <= m) table[row + 1][column] += current;
    }
  }

  return table[m][n];
}

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(18, 18));
