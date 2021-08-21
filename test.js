/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	let arr = [];
	let partial = [];
	subsetSum(candidates, target, partial);

	function subsetSum(candidates, target, partial) {
		let s, n, remaining;
		// console.log(partial);

		// sum partial
		s = partial.reduce(function (a, b) {
			return a + b;
		}, 0);

		if (s === target) {
			// console.log(partial)
			arr.push(partial);
		}

		if (s >= target) {
			return;
		}

		for (let i = 0; i < candidates.length; i++) {
			n = candidates[i];
			remaining = candidates.slice(i);
			subsetSum(remaining, target, partial.concat([n]));
		}
	}

	return arr;
};

console.log(combinationSum([2, 5, 8], 7));
