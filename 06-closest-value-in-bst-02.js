const { BST } = require('./data-structures/bst');

function findClosestValueInBST(tree, target) {
  return findClosestValueInBSTHelper(tree.root, target, tree.root.value);
}

function findClosestValueInBSTHelper(tree, target, closest) {
  let currentNode = tree;
  while (currentNode) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }

    if (target < currentNode.value) currentNode = currentNode.left;
    else if (target > currentNode.value) currentNode = currentNode.right;
    else break;
  }
  return closest;
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

console.log(findClosestValueInBST(list1, 13));
