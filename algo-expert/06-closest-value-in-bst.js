const { BST } = require('./data-structures/bst');

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
  return findClosestValueInBSTHelper(tree.root, target, tree.root.value);
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

console.log(findClosestValueInBST(list1, 11));
