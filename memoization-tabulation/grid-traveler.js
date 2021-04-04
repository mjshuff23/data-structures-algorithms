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
