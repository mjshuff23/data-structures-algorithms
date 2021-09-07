// m = target.length
// n = numbers.length
// Time - O(n^m), Space - O(n^m)

function allConstruct(target, wordBank) {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (const word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombos = table[i].map((subArray) => [...subArray, word]);
        table[i + word.length].push(...newCombos);
      }
    }
  }

  return table[target.length];
}
// [['abc', 'def'], ['ab', 'cdef']]
console.log(allConstruct('abcdef', ['abc', 'def', 'ab', 'cd', 'cdef']));
// []
console.log(allConstruct('purple', ['pu', 'ple', 'rpl', 'p', 'ple']));
// [['pu', 'rple'], ['p', 'ur', 'ple']]
console.log(allConstruct('purple', ['pu', 'rple', 'rpl', 'p', 'ple', 'ur']));
