const { BST } = require('./data-structures/bst');

function branchSums(root) {
  // Write your code here.
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

function calculateBranchSums(node, runningSum, sumsArray) {
  if (!node) return;
  // Add node to branch sum
  const newSum = runningSum + node.value;
  if (!node.left && !node.right) return sumsArray.push(newSum);
  calculateBranchSums(node.left, newSum, sumsArray);
  calculateBranchSums(node.right, newSum, sumsArray);
}

let list1 = new BST();
list1.insert(20);
list1.insert(30);
list1.insert(25);
list1.insert(10);
list1.insert(29);
list1.insert(14);
list1.insert(28);
list1.insert(9);
list1.insert(5);
list1.insert(30);

console.log(branchSums(list1.root));
