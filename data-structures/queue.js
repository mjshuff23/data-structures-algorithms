class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(value) {
    let node = new Node(value);

    if (!this.length) {
      this.front = node;
      this.back = node;
      return ++this.length;
    }

    let currentNode = this.front;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.back = node;
    return ++this.length;
  }

  dequeue() {
    if (!this.length) return null;

    if (this.length === 1) {
      const result = this.front;
      this.front = null;
      this.back = null;
      this.length--;
      return result.value;
    }

    let result = this.front;
    this.front = this.front.next;
    this.length--;
    return result.value;
  }

  size() {
    return this.length;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

module.exports = {
  Node,
  Queue,
};
