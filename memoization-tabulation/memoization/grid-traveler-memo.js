// Time - O(m * n), Space O(n + m)
function gridTraveler(m, n, memo = {}) {
  // Are the arguments in memo?
  const key = `${m},${n}`;
  // console.log(`key: ${key}`);
  // console.log(`key(reverse): ${key.split(',').reverse().join(',')}`);
  if (key in memo) {
    return memo[key];
  }
  // Not worth the trouble, since it won't affect big O
  if (key.split(',').reverse().join(',') in memo) {
    return memo[key.split(',').reverse().join(',')];
  }
  // If it's a 1x1 grid, return 1
  if (m === 1 && n === 1) return 1;
  // If it's a 0x# grid or #x0 grid, return 0;
  if (m === 0 || n === 0) return 0;
  // Recursively check all options possible based on moving down or right
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
}

console.log(gridTraveler(3, 7));
