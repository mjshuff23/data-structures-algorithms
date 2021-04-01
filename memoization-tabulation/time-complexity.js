const foo = (n) => {
  if (n <= 1) return;
  foo(n - 1);
};

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

console.time('test');
foo(2141);
console.timeEnd('test');

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

// O(2^n) Time, O(n) space
const dib = (n) => {
  if (n <= 1) return;
  dib(n - 1);
  dib(n - 1);
};

// O(2^n/2) Time which becomes O(2^n), Space O(n/2) which becomes O(n)
const lib = (n) => {
  if (n <= 1) return;
  lib(n - 2);
  lib(n - 2);
};
