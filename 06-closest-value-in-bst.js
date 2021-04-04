class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*
    Write a function that takes in a Binary Search Tree and a target integer value and returns the closest value to the target value contained in the BST

    You can assume there will only be one closest value

    Each BST node has an integer `value`, a `left` child node, and a `right` child node
    A node is said to be a valid BST node if and only if it satisfies the BST property:
        a value is strictly greater than the values of every node to it's left 
            - value > values of every node to the left
        it's value is less than or equal to the values of every node to the right
            - value <= values of every node to it's right
        It's children nodes are either valid BST nodes themselves or None/null
*/
// Average O(log(n)) time, O(log(n)) Space
// Worst O(n) time, O(n) space
function findClosestValueInBST(tree, target) {
  return findClosestValueInBSTHelper(tree, target, tree.value);
}

function findClosestValueInBSTHelper(tree, target, closest) {
  if (tree === null) return closest;

  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  if (target < tree.value) {
    return findClosestValueInBSTHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBSTHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}
