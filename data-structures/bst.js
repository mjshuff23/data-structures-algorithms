const { TreeNode } = require('./tree-node');

class BST {
  constructor() {
    this.root = null;
    this.nodeCount = 0;
  }

  insert(value, currentNode = this.root) {
    const node = new TreeNode(value);

    if (!this.root) {
      this.root = node;
      return ++this.nodeCount;
    }

    if (value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = node;
        return ++this.nodeCount;
      } else {
        // If there are nodes to the left, traverse further
        this.insert(value, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = node;
        return ++this.nodeCount;
      } else {
        this.insert(value, currentNode.right);
      }
    }
  }

  searchRecursion(value, currentNode = this.root) {
    if (!currentNode) return false;

    if (value < currentNode.value) {
      return this.searchRecursion(value, currentNode.left);
    } else if (value > currentNode.value) {
      return this.searchRecursion(value, currentNode.right);
    } else return true;
  }

  searchIterative(value, currentNode = this.root) {
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else return true;

      return false;
    }
  }

  inOrder(node = this.root) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  preOrder(node = this.root) {
    if (node) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node = this.root) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }
}

// let list1 = new BST();
// list1.insert(20);
// list1.insert(30);
// list1.insert(25);
// list1.insert(10);
// list1.insert(29);
// list1.insert(14);
// list1.insert(28);
// list1.insert(9);
// list1.insert(5);
// list1.insert(30);

// // list1.inOrder();
// // list1.preOrder();
// list1.postOrder();
// console.dir(list1, { showHidden: false, depth: null });
// console.log(list1.searchIter(29));

module.exports = {
  BST,
};
