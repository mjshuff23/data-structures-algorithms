function minimumWaitingTime(queries) {
  // Write your code here.
  // sort array in place - logn time
  queries.sort((a, b) => a - b);

  let totalWaitingTime = 0;
  // Loop through queries - n time
  for (let i = 0; i < queries.length; i++) {
    const duration = queries[i];
    // [1, 2, 3] - 0 + 1 + 2 = 3
    // iteration 1 - TWT(beginning) = 0, duration = 1
    //             - queriesLeft = 2, TWT(end) = 2
    // iteration 2 - TWT(beginning) = 2, duration = 2
    //             - queriesLeft = 1, TWT(end) = 4
    // iteration 3 - TWT(beginning) = 4, duration = 3
    //             - queriesLeft = 0, TWT(end) = 4
    const queriesLeft = queries.length - (i + 1);
    totalWaitingTime += duration * queriesLeft;
  }
  console.log(totalWaitingTime);
  return totalWaitingTime;
}
