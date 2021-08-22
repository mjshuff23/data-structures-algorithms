// Arrays in JavaScript
//  - Arrays are stored contiguously in memory.  With dynamic arrays (JavaScript), the computer
//     allocates double the memory needed for the current size of the array, so it does not need to
//     copy and relocate often
//  - Arrays should always contain the same data type for ease of manipulation
const numbers = [1, 3, 5, 7, 9];
const names = ['Michael', 'David', 'Brenda', 'Christina'];

// Accessing any index in an array directly is O(1) time complexity (constant-time)
console.log(names[2]);

// Adding or removing values to the back of the array is also constant-time, O(1)
numbers.push(11);
names.push('Jonathan');

// Adding or removing values from the front of the array is linear time, O(n).  The reason why is
//  because when we add/remove from the front, we need to shift the indices of every other value in
//  the array
console.log(numbers.shift());
// Notice how when you add an item to the front/back of an array, it's return value is the array's
//  new length
console.log(numbers.unshift(2));

// Updating a value at a given index is constant-time O(1)
console.log((numbers[3] = 20));
console.log(numbers);
