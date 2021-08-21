class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(value) {
    // Create new Node for our value
    let newNode = new Node(value);

    // If LinkedList is empty:
    // - Set newNode as head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    // Start at the head
    this.tail = this.head;

    // Loop until we get to the current tail
    while (this.tail.next !== null) {
      // Go through the list
      this.tail = this.tail.next;
    }

    // Set current tail's next to our new Node
    this.tail.next = newNode;
    // Set our new Node as the new tail
    this.tail = newNode;
    this.length++;
    return this;
  }

  removeTail() {
    if (!this.head) return;

    // If we only have a head, remove it
    if (!this.head.next) {
      // Store this so we can return it
      let result = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return result;
    }
    // If we get here, we know we have at least a head and a tail
    let firstNode = this.head;
    let nextNode = this.tail;

    // Loop until we get to the tail
    while (nextNode.next !== null) {
      firstNode = nextNode;
      nextNode = firstNode.next;
    }

    // When we get here firstNode is going to be our new tail and nextNode is going to be what we're removing
    firstNode.next = null;
    this.tail = firstNode;
    this.length--;
    return nextNode;
  }

  addToHead(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  removeHead() {
    if (!this.head) return;

    if (!this.head.next) {
      let result = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return result;
    }

    let result = this.head;
    this.head = this.head.next;
    this.length--;
    return result;
  }

  contains(target) {
    let currentNode = this.head;

    while (currentNode.next !== null) {
      if (currentNode.value === target) return true;
      currentNode = currentNode.next;
    }

    if (currentNode.value === target) return true;

    return false;
  }

  get(index) {
    let currentNode = this.head;
    if (index < 0 || index > this.length) return null;

    for (let i = 1; i <= index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  set(index, value) {
    let currentNode = this.head;

    if (index < 0 || index > this.length - 1) return false;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    currentNode.value = value;
    return true;
  }

  insert(index, value) {
    let newNode = new Node(value);
    let currentNode = this.head;

    if (index < 0 || index > this.length - 1) return false;

    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    // Have our new Node point to our current Node's next
    newNode.next = currentNode.next;
    // Have our current Node's next become our new Node
    // current Node -> new Node -> current Node's previous next value
    currentNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    let previous = this.head;
    let currentNode = this.head.next;

    if (index < 0 || index > this.length) return undefined;

    for (let i = 1; i < index; i++) {
      // set previous to the current Node
      previous = currentNode;
      // set current Node to it's next value
      currentNode = currentNode.next;
    }

    previous.next = currentNode.next;
    this.length--;
    return currentNode;
  }

  size() {
    return this.length;
  }
}

let list1 = new LinkedList();
list1.addToHead(1);
list1.addToHead(2);
list1.addToHead(3);
console.log(list1.insert(1, 5));
currentNode = list1.head;
for (let i = 0; i < list1.length; i++) {
  console.log(currentNode);
  currentNode = currentNode.next;
}

module.exports = {
  Node,
  LinkedList,
};
