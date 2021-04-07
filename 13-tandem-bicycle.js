function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // redShirtSpeeds and blueShirtSpeeds are both positive integer arrays that are equal in length
  // pear every rider wearing a red shirt with a rider wearing a blue to operate a tandem bike
  // write a function that returns the max possible total speed or the min possible total speed
  //  - if fastest = true, return max possible, else return min possible
  // Brute force - Try every pair possible and determine the fastest sets

  // sort input arrays in place
  // nlog(n)
  redShirtSpeeds.sort((a, b) => b - a);
  blueShirtSpeeds.sort((a, b) => b - a);

  let totalSpeed = 0;
  let count = 0;
  if (fastest) {
    // compare the fastest of each shirt left
    // Loop through, end loop by removing the pairs
    let redMaxIdx = 0;
    let blueMaxIdx = 0;
    while (count < redShirtSpeeds.length) {
      // if the redShirtFasted is greater than blue shirt, pair with slowest blue shirt
      if (redShirtSpeeds[redMaxIdx] > blueShirtSpeeds[blueMaxIdx]) {
        // pair red with slowest blue, push red fastest
        totalSpeed += redShirtSpeeds[redMaxIdx++];
        count++;
      } else {
        totalSpeed += blueShirtSpeeds[blueMaxIdx++];
        count++;
      }
    }
    return totalSpeed;
  } else {
    let redMinIdx = redShirtSpeeds.length - 1;
    let blueMinIdx = blueShirtSpeeds.length - 1;
    while (count < redShirtSpeeds.length) {
      if (redShirtSpeeds[redMinIdx] < blueShirtSpeeds[blueMinIdx]) {
        totalSpeed += blueShirtSpeeds[blueMinIdx--];
        redMinIdx--;
        count++;
      } else {
        totalSpeed += redShirtSpeeds[redMinIdx--];
        blueMinIdx--;
        count++;
      }
    }
    return totalSpeed;
  }
}

function tandemBicycle2(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // redShirtSpeeds and blueShirtSpeeds are both positive integer arrays that are equal in length
  // pear every rider wearing a red shirt with a rider wearing a blue to operate a tandem bike
  // write a function that returns the max possible total speed or the min possible total speed
  //  - if fastest = true, return max possible, else return min possible
  // Brute force - Try every pair possible and determine the fastest sets

  // sort input arrays in place
  // nlog(n)
  redShirtSpeeds.sort((a, b) => a - b); // [1, 3, 6]
  blueShirtSpeeds.sort((a, b) => a - b); // [2, 3, 4]

  if (!fastest) reverseArrayInPlace(redShirtSpeeds); // red - [6, 3, 1]
  //   console.log(redShirtSpeeds);
  //   console.log(blueShirtSpeeds);
  let totalSpeed = 0;

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    const rider1 = redShirtSpeeds[i];
    const rider2 = blueShirtSpeeds[blueShirtSpeeds.length - i - 1];
    // fastest
    // iteration 1 - rider1 = 1, rider2 = 4, totalSpeed = 4;
    // iteration 2 - rider1 = 3, rider2 = 3, totalSpeed = 7;
    // iteration 3 - rider1 = 6, rider2 = 2, totalSpeed = 13
    // slowest
    // iteration 1 - rider1 = 6, rider2 = 4, totalSpeed = 6;
    // iteration 2 - rider1 = 3, rider2 = 3, totalSpeed = 9;
    // iteration 3 - rider1 = 1, rider2 = 2, totalSpeed = 11;
    totalSpeed += Math.max(rider1, rider2);
  }

  return totalSpeed;
}

function reverseArrayInPlace(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]]; // swap
    start++;
    end--;
  }
}

console.log(tandemBicycle2([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true));
console.log(tandemBicycle2([1, 3, 6], [2, 4, 3], false));
console.log(tandemBicycle2([1, 3, 6], [2, 4, 3], true));
