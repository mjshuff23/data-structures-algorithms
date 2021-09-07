/*
    Write a function `allConstruct(target, wordBank) that accepts a target string and an array of strings

    Return a 2D array containing all the ways that the `target` can be constructed by concatenating elements of the `wordBank` array

    Elements of the wordBank array can be used as many times as needed
*/

function allConstruct(target, wordBank, memo = {}) {
  if (target in memo) {
    console.log('target in memo');
    return memo[target];
  }
  if (target === '') return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      //   console.log(`suffixWays`, suffixWays);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      //   console.log(`targetWays`, targetWays);
      result.push(...targetWays);
    }
  }

  memo[target] = result;
  return memo[target];
}

console.log(
  allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])
);
// [['ab','cd','ef'], ['ab','c', 'def'], ['abc', 'def'], ['abcd', 'ef']]
console.log(allConstruct('hello', ['cat', 'dog', 'mouse'])); // []
console.log(allConstruct('', ['cat', 'dog', 'mouse'])); // [[]]
