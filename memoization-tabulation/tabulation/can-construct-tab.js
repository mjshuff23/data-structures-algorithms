// m = target, n = wordBank.length
// Time - O(m^2 * n), Space - O(m)
const canConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    // We are looking behind here
    if (table[i]) {
      for (const word of wordBank) {
        // narrow words down by seeing if word matches characters starting at i
        // slice's second index is not inclusive
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[target.length];
};

console.log(canConstruct('abcdef', ['abc', 'def', 'ab', 'cd', 'cdef'])); // true
console.log(canConstruct('purple', ['pu', 'ple', 'rpl', 'p', 'ple'])); // false
