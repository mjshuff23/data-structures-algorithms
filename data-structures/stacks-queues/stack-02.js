class Stack {
  #items = [];
  push = (element) => this.#items.push(element);
  pop = () => this.#items.pop();
  isempty = () => this.#items.length === 0;
  empty = () => (this.#items.length = 0);
  size = () => this.#items.length;
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size()); //3
console.log(stack.pop()); // 3
console.log(stack.size()); //2
