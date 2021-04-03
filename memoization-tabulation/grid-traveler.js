/*
    You're traveling on a 2D grid.  You begin at the top-left corner and the goal is to get to the bottom-right corner, you may only move down or right

    In how many ways can you travel to the goal on a grid with dimensions m * n?

    Write a function `gridTraveler(m, n)` that calculates this

    - When using recursion, visualize a tree
*/

// Time - O(2^n+m), Space - O(n + m)
function gridTraveler(m, n) {
  // If it's a 1x1 grid, return 1
  if (m === 1 && n === 1) return 1;
  // If it's a 0x# grid or #x0 grid, return 0;
  if (m === 0 || n === 0) return 0;
  // Recursively check all options possible based on moving down or right
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

// Time - O(m * n), Space O(n + m)
function gridTraveler2(m, n, memo = {}) {
  // Are the arguments in memo?
  const key = `${m},${n}`;
  // console.log(`key: ${key}`);
  // console.log(`key(reverse): ${key.split(',').reverse().join(',')}`);
  if (key in memo) {
    console.log(memo[key]);
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
  memo[key] = gridTraveler2(m - 1, n, memo) + gridTraveler2(m, n - 1, memo);
  return memo[key];
}

console.log(gridTraveler2(3, 7));
