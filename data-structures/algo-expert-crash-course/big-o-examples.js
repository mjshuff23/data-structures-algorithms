// O(1) - Constant Time
for (let i = 0; i < 1000; i++) {
	console.log(i);
}

// O(log(n)) - Logarithmic
function loop(n) {
	for (let i = 0; i < n; i * 2) {
		console.log(i);
	}
}

// O(n) - Linear
function loopTwo(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}

// O(nlog(n)) - Log Linear
// n
const nums = [128, 0, 64, 16, 14, 8, 2];

function merge(left, right) {
	let result = [];

	while (left.length || right.length) {
		if (left.length && right.length) {
			if (left[0] < right[0]) {
				result.push(left.shift());
			} else {
				result.push(right.shift());
			}
		} else if (left.length) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	return result;
}

// log n
function mergeSort(arr) {
	if (arr.length <= 1) return arr;

	const pivot = arr.length / 2;
	const left = arr.slice(0, pivot);
	const right = arr.slice(pivot);

	return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(nums));

// O(n²) - Quadratic
function quadraticExample(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
}
// quadraticExample(3);

// O(n³) - Cubic
function cubicExample(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			for (let k = 0; k < n; k++) {
				console.log(i, j, k);
			}
		}
	}
}
// cubicExample(3);
