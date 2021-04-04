/*
    Write a function `canConstruct(target, wordBank) that accepts a target string and an array of strings

    Return a boolean indicating whether or not the `target` can be constructing by concatenating elements of the `wordBank` array

    We can reuse elements from `wordBank` as many times as necessary

    Only take prefixes, as to not create new adjacencies 
                                 abcdef
                            ab/ abc| abcd\
                          cdef   def     ef
                        cd/     def|      F
                        ef      WINNER T
                        F
*/

function canConstruct(target, wordBank) {
  if (target === '') return true;

  for (const word of wordBank) {
    // if (target.indexOf(word) === 0) {
    //   const suffix = target.slice(word.length);
    //   if (canConstruct(suffix, wordBank)) return true;
    // }

    if (target.startsWith(word)) {
      const remaining = target.slice(word.length);
      if (canConstruct(remaining, wordBank)) return true;
    }
  }

  return false;
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('potentpot', ['pote', 'tenpo', 't', 'po', 'tenpo'])); // false
console.log(canConstruct('', ['cat', 'fish', 'leg', 'pinnacle'])); // true
