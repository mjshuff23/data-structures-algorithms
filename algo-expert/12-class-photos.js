function classPhotos(redShirts, blueShirts) {
  // sort student heights, logn each = n
  redShirts.sort((a, b) => b - a);
  blueShirts.sort((a, b) => b - a);

  console.log(redShirts, blueShirts);
  const shirtColorInFirstRow = redShirts[0] < blueShirts[0] ? 'RED' : 'BLUE';

  for (let i = 0; i < redShirts.length; i++) {
    const redShirt = redShirts[i];
    const blueShirt = blueShirts[i];

    if (shirtColorInFirstRow === 'RED') {
      if (redShirt >= blueShirt) return false;
    } else if (blueShirt >= redShirt) return false;
  }

  return true;
}

console.log(classPhotos([1, 2, 3, 4, 8], [2, 3, 4, 5, 6]));
