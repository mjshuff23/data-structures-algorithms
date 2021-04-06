const { BST } = require('./data-structures/bst');

function nodeDepths(root, depth = 0) {
  if (root === null) return 0;
  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  );
}

function nodeDepthsIter(root) {
  let sumOfDepths = 0;
  const stack = [{ node: root, depth: 0 }];
  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (node === null) continue;
    sumOfDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }

  return sumOfDepths;
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

console.log(nodeDepths(list1.root, 0));
console.log(nodeDepthsIter(list1.root, 0));
