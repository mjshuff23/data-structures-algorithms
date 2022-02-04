//////////////////////////// Solution 1 - Recursion ////////////////////////////
function isSymmetric(root) {
  if (root == null) return true; // base case

  return symmetryChecker(root.left, root.right);
}

function symmetryChecker(leftNode, rightNode) {
  // If both sub trees are empty
  if (left == null && right == null) return true;
  // If only one of the sub trees are empty
  if (left == null || right == null) return false;
  // If the values dont match up
  if (left.val !== right.val) return false;

  // Check both subtrees but travelled in a mirrored/symmetric fashion
  // (one goes left, other goes right)  and make sure they're both symmetric
  return (
    symmetryChecker(left.left, right.right) &&
    symmetryChecker(left.right, right.left)
  );
}

/////////////////////////// Solution 2 - Iteratively ///////////////////////////
function isSymmetric2(root) {
  // create queue
  const queue = [];

  // initially push root twice
  queue.push(root, root);

  // while we have nodes to look at...
  while (queue.length > 0) {
    // grab left and right
    const node1 = queue.shift();
    const node2 = queue.shift();

    // if both empty, symmetric still
    if (node1 == null && node2 == null) continue;
    // if one is null and the other is not, asymmetric
    if (node1 == null || node2 == null) return false;
    // if values are not equal, asymmetric
    if (node1.value !== node2.value) return false;

    // check left’s left to right’s right
    queue.push(node1.left, node2.right);
    // check left’s right to right’s left
    queue.push(node1.right, node2.left);
  }

  // symmetric
  return true;
}
