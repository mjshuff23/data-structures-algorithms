// m = target
// n = wordBank.length
// Time - O(m^2*n), Space - O(m)

function countConstruct(target, wordBank) {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (const word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i];
      }
    }
  }

  console.log(table);
  return table[target.length];
}

console.log(countConstruct('abcdef', ['abc', 'def', 'ab', 'cd', 'cdef'])); // 2
console.log(countConstruct('purple', ['pu', 'ple', 'rpl', 'p', 'ple'])); // 0
console.log(countConstruct('purple', ['pu', 'rple', 'rpl', 'p', 'ple', 'ur'])); // 2
