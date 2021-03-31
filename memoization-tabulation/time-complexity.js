const foo = (n) => {
  if (n <= 1) return;
  foo(n - 1);
};

console.time('test');
foo(2141);
console.timeEnd('test');

/*  Time Complexity - O(n), Space - O(n)
    foo(5)       5
                 |
                 4
                 |
                 3
                 |
                 2
                 |
                 1
*/

const bar = (n) => {
  if (n <= 1) return;
  bar(n - 2);
};

/*  Time Complexity - O(n-2) which becomes O(n) , Space - O(n)
    bar(6)       6
                 |
                 4
                 |
                 2
                 |
                 0
*/

const dib = (n) => {
  if (n <= 1) return;
  dib(n - 1);
  dib(n - 1);
};