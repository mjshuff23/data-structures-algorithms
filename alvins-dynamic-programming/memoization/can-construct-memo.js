/*
    Write a function `canConstruct(target, wordBank) that accepts a target string and an array of strings

    Return a boolean indicating whether or not the `target` can be constructing by concatenating elements of the `wordBank` array

    We can reuse elements from `wordBank` as many times as necessary

    Only take prefixes, as to not create new adjacencies 
                                                 1 _
                                 abcdef          *n |
                            ab/ abc| abcd\       *n |
                          cdef   def     ef      *n | - m
                        cd/     def|      F      *n |
                        ef      WINNER T         *n_|
                        F
*/

// m - target.length
// n - wordBank.length

// time complexity - # of nodes in call tree - branching factor to the height power
// space complexity - node stack in call tree

// Time - O(n * m^2)
// Space - O(m^2)
function canConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (const word of wordBank) {
    // if (target.indexOf(word) === 0) {
    //   const suffix = target.slice(word.length);
    //   if (canConstruct(suffix, wordBank)) return true;
    // }

    if (target.startsWith(word)) {
      const remaining = target.slice(word.length); // <- affects complexity m
      if (canConstruct(remaining, wordBank, memo)) {
        memo[target] = true;
        return memo[target];
      }
    }
  }

  memo[target] = false;
  return memo[target];
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('potentpot', ['pote', 'tenpo', 't', 'po', 'tenpo'])); // false
console.log(canConstruct('', ['cat', 'fish', 'leg', 'pinnacle'])); // true
