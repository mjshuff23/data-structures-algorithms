# Data Structures

- A **Data Structure** is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.
- The functions available in each data structure offer certain benefits in regard to [time/space complexity](#complexity-analysis)

## Complexity Analysis

- **Complexity Analysis** is the process of determining how efficient an algorithm is. Usually involves finding both the time complexity and space complexity of an algorithm
- **Big O** - Worst case scenario in regards of time and space to solve task
  - **Time Complexity**
    - A measure of how fast a problem runs
  - **Space Complexity**
    - How much memory a problem takes up while running

## Memory

- **Bit**
  - Short for `binary digit`, a bit is a fundamental unit of information in Computer Science that represents a state with one of two values, typically `1` or `0`. Any and all data stored on a computer, at it's most basic level, is represented in `bits`
- **Byte**
  - A group of eight `bits`. (01101000) is one `byte`
  - A single byte can represent up to `256` data values (2⁸)
  - Since a binary number is a number expressed with two symbols, like `1` and `0`, a byte can effectively represent all of the numbers between `0` and `255` inclusive, in binary format
  - The follow bytes represent the numbers `1`, `2`, `3`, and `4` in binary format:
    - `00000001`
    - `00000010`
    - `00000011`
    - `00000100`
- **Fixed-Width Integer**
  - An integer represented by a fixed amount in `bits`. For example, a **32-bit integer** is an integer represented by 32 bits (4 bytes), and a **64-bit integer** is an integer represented by 64 bits (8 bytes)
  - The following represents the 32-bit representation of the number 1:
    - `00000000 00000000 00000000 00000001`
  - The following represents the 64-bit representation of the number 10:
    - `00000000 00000000 00000000 00000000 00000000 00000000 00000000 00001010`
  - Regardless of how large an integer is, an operation performed on it's fixed-width-integer representation consists of a constant number of bit manipulations, since the integer is made up of a fixed number of bits
- **Memory**
  - The foundational layer of computing where all data is stored
  - Data stored in memory is stored in bytes, and by extension, bits
  - Bytes in memory can **"point"** to other bytes in memory, so as to store references to other data
  - The amount of memory that a machine has is bounded, making it valuable to limit how much memory an algorithm takes up
  - Accessing a byte or a fixed number of bytes (like 4 bytes or 8 bytes in the case of 32-bit and 64-bit integers) is an elementary operation, which can be loosely treated as a single unit of operational work
  - Data is stored **contigously**, enough space must be available with _nothing in between_ to store the data necessary to represent what we want

## Big O Notation

- Used to describe the time and space complexity of algorithms
- Variables used in Big O notation denote the sizes of the inputs to algorithms.
  - For example, `O(n)` might be the time complexity of an algorithm that traverses through an array of length `n`
  - Similary, `O(n + m)` might be the time complexity of an algorithm that traverses through an array of length `n` and through a string of length `m`
- **Common Complexities (fastest to slowest)**
  - Constant: O(1)
  - Logarithmic: O(log(n))
  - Linear: O(n)
  - Log-Linear: O(nlog(n))
  - Quadratic: O(n²)
  - Cubic: O(n³)
  - Exponential O(2ⁿ)
  - Factorial O(n!)
    ![Time Complexity Chart](../../images/time-complexity-chart.png)
- Big O describes the **worst-case** complexity of an algorithm, even though the worst-case complexity might differ from an **average-case** complexity
- For example, some sorting algorithms have different time complexities depending on the layout of the elements in their input array. In rare cases, their time complexity will be much worse than in more common cases. Similarly, an algorithm that takes in a string and performs special operations on uppercase characters might have a different time complexity when run on an input string of only uppercase characters vs an input string with just a few uppercase characters
- It is worthwhile to consider average-case and worst-case scenarios

## Logarithm

- A mathematical concept that's widely used in Computer Science and that's defined by the following equation:
  - `logb(x) = y` if and only if `bʸ = x`
- In the context of coding interviews, the logarithm is used to describe the complexity analysis of algorithms, and it's usage always implies a logarithm of base `2`. In other words, the logarithm used in the context of coding interviews is defined by the follow equation:
  - `log(n) = y` if and only if `2ʸ = n`
- In plain English, if an algorithm has a logarithmic time complexity (`O(log(n))`, where n is the size of the input), then whenever the algorithm's input doubles, the number of operations needed to complete the algorithm only increases by one unit. Conversely, an algorithm with a linear time complexity would see it's number of operations double if it's input's size doubles.
- As an example, a linear-time-complexity algorithm with an input size of 1,000 might take roughly 1,000 operations to complete whereas a logarithmic-time-complexity algorithm with the same input size would take roughly 10 operations to complete because `2¹⁰ ~= 1000`

## Arrays

- A **static array** is an implementation of an array that allocates a fixed amount of memory to be used for storing the array's values
  - Appending values to the array therefore involves copying the entire array and allocating new memory for it, accounting for the extra space needed for the newly appended value. This is **linear time**
- A **dynamic array** is an implementation of an array that preemptively allocates double the amount of memory needed to store the array's values
  - Appending values to the array is a **constant time** operation until the allocated memory is filled up, at which point the array is copied and double the memory is once again allocated. This implementation leads to an amortized constant time insertion-at-end operation
- A lot of programming languages, like **JavaScript** and **Python**, use dynamic arrays
- A linear collection of data values that are accessible at numbered indices, starting at index `0`
- **Standard Operations Complexity:**
  - Accessing a value at a given index: `O(1) time+space`
  - Updated a value at a given index: `O(1) time+space`
  - Inserting a new value at the beginning: `O(n)`
  - Inserting a new value in the middle: `O(n)`
  - Inserting a new value at the end:
    - Amortized `O(1)` when dealing with a **dynamic array**
    - O(n) when dealing with a **static array**
  - Removing a value at the beginning: `O(n)`
  - Removing a value in the middle: `O(n)`
  - Removing a value at the end: `O(1)`
  - Copying the array: `O(n) time+space`
  - Initializing an array: `O(n) time+space`
  - Traversing an array(`map`, `filter`, `reduce`, `forEach`):
    - `O(n) time, O(1) space if morphing array`
    - `O(n) time, O(n) space if creating a new array`

## Linked Lists

- **Singly Linked List:**
  - A data structure that consists of nodes, each with some value and a pointer to the next node in the linked list. A linked list node's value and next node are typically stored in `value` and `next` properties
  - The first node in a linked list is referred to as the **head** of the linked list
  - The last node in a linked list, whose `next` points to `null`, is known as the **tail**
  - Visual Representation of a Singly Linked List:
    - `0 -> 1 -> 3 -> 5 -> 6 -> 9 -> null`
  - A singly linked lists typically exposes it's head to it's user for easy access.
  - While finding a node in a singly linked lists involves traversing through all of the nodes leading up to the node in question (as opposed to instant access with an array), adding or removing nodes simply involves overwriting `next` pointers (assuming that you have access to the node right before the node that you're adding or removing)
  - **Standard Operations and Time Complexity:**
    - Accessing the `head`: `O(1)`
    - Accessing the `tail`: `O(n)`
    - Accessing the middle `node`: `O(n)`
    - Inserting / Removing the head: `O(1)`
    - Inserting / Removing the tail: `O(n) to access + O(1)`
    - Inserting / Removing a middle node: `O(n) to access + O(1)`
    - Searching for a value: `O(n)`
- **Double Linked List:**
  - Same as a **Singly Linked List** except that each node also have a pointer to the previos node in the linked list, typically stored in the `prev` property
  - Just as the `next` property of a doubly linked list's `tail` points to `null`, so does the `prev` property of a doubly linked list's `head`
  - Visual Representation of a Doubly Linked List:
    - `null <- 0 <--> 1 <--> 2 <--> 5 <--> 8 -> null`
  - A doubly linked list also exposes it's `tail` to the user
  - **Standard Operations and Time Complexity:**
    - Accessing the `head`: `O(1)`
    - Accessing the `tail`: `O(1)`
    - Accessing the middle `node`: `O(n)`
    - Inserting / Removing the `head`: `O(1)`
    - Inserting / Removing the `tail`: `O(1)`
    - Inserting / Removing the middle `node`: `O(n) to access + O(1)`
    - Searching for a value: `O(n)`
- **Circular Linked List:**
  - A linked list that has no clear `head` or `tail`, because it's "tail" points to it's "head", forming a circle
  - Can either be a singly circular linked list or a doubly circular linked list
