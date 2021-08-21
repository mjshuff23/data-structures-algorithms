class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (this.length) {
      let currentTop = this.top;
      this.top = newNode;
      newNode.next = currentTop;
      this.length++;

      return this.length;
    }

    this.top = newNode;
    // increment and return
    return ++this.length;
  }

  pop() {
    if (!this.length) return null;

    if (this.length === 1) {
      let result = this.top;
      this.top = null;
      this.length--;

      return result.value;
    }

    let result = this.top;
    this.top = this.top.next;
    this.length--;
    return result.value;
  }

  size() {
    return this.length;
  }
}

let stack = new Stack();
stack.push('test');
// console.log(stack);
let result = stack.pop(); // 'test'
console.log(result);

module.exports = {
  Node,
  Stack,
};
