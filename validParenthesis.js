function validParenthesis(s) {
  // 1
  if (s.length === 0) return true;
  if (s.length % 2 !== 0) return false;

  const dictionary = {
    '}': '{',
    ')': '(',
    ']': '[',
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // grab current character
    const currChar = s[i];
    // grab last item on the stack
    const lastChar = stack[stack.length - 1];

    if (currChar in dictionary) {
      // compare last item on stack to the value inside our dictionary key
      if (lastChar === dictionary[currChar]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(currChar);
    }
  }
  // 3
  return !stack.length;
}

console.log(validParenthesis('({})'));
console.log(validParenthesis('({}]'));
