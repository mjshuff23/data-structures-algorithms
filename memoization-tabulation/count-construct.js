/*
    Write a function `countConstruct(target, wordBank) that accepts a target string and an array of strings

    The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array

    Elements of the wordBank array can be reused as many times as necessary
*/

function countConstruct(target, wordBank) {
  if (target === '') return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      let suffix = target.slice(word.length);
      const numWaysForRest = countConstruct(suffix, wordBank);
      totalCount += numWaysForRest;
    }
  }

  return totalCount;
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
