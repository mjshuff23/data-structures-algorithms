class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // You're given the head of a Singly Linked List whose nodes are in sorted order with respect to their value.  Write a function that returns a modified version of the Linked List that doesn't contain any nodes with duplicate values
  // The linked list should be modified in place and should stay sorted with respect to their values
  // Create a pointer for the first node
  let currentNode = linkedList;
  // If it's not null
  while (currentNode) {
    // create a pointer to the next node
    let nextDistinctNode = currentNode.next;
    // while it's not null and it's value is the same as the first pointers value
    //  - move the next pointer to the next position
    while (nextDistinctNode && nextDistinctNode.value === currentNode.value) {
      nextDistinctNode = nextDistinctNode.next;
    }
    // When they are not the same
    //  - point the first pointer's next to our next non-duplicate value
    //  - and set the first pointer to that value
    currentNode.next = nextDistinctNode;
    currentNode = nextDistinctNode;
  }
  // after adjusting all the values, return our linked list
  return linkedList;
}

let linkedList = {
  value: 1,
  next: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null,
          },
        },
      },
    },
  },
};
console.log(linkedList);

removeDuplicatesFromLinkedList(linkedList);
console.log(linkedList);
