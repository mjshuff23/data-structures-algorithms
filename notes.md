# DSA Notes

## Big O Notation - A framework to analyze and compare algorithms

- Consider visualizing as a tree
- Space complexity is not always the same as Time complexity
- Drop constants and lower order terms
  - Ex: O(3*n^2 + 10n + 10) = O(n^2)
- Big O concerns itself with the worst-cast scenario

### Complexities from fastest to slowest
  
- O(1)       - Constant - Always executes at the same time independent of input
             - Sequential statements, loops dependent on a constant
- O(log(n))  - Logarithmic - Loops dividing input in half each iteration
- O(n)       - Linear - Grows linearly and in direct proportion to the size of input data set
             - Loops that loop through the length of the input
- O(nlog(n)) - Loglinear, Linearithmic, Quasilinear
- O(n^2)     - Quadratic - nested loops dependant on n input
- O(n^c)     - Polynomial, Algebraic
- O(c^n)     - Exponential
- O(n!)      - Factorial
  
### Time Complexity - Amount of work the CPU has to do

- Conditionals - We always use the worst possible scenario, whether it be in the if or the else, whichever is higher, we go with
- For Loops - Find out runtime of everything inside of the for loop, multiplied by the number of times the loop runs(n)
  - If a constant number bounds the loop, it will be constant time: `for(let i = 0; i < 4; i++) {...}` = O(1) because it does not depend on the input size
  - If the input is divided in half for each iteration of the loop, it will be `logarthimic`
  
### Space Complexity - Amount of memory being used

- Space complexity is the amount of memory used by the algorithm(including the input values to the algorithm), to execute and produce the rest
- Auxiliary Space is the extra space or the temporary space used by the algorithm during it's execution
- Space Complexity = Auxiliary Space + Input Space

- ### Memory Usage during Execution
  
  - Instruction Space - Memory used to save the compiled version of the instructions
  - Environmental Stack - The call stack
  - Data Space - Space used by variables and constants
  - O(1) - Constant - Nothing grows based on the input size
  - O(n) - Linear - Data scales dependent upon input size
