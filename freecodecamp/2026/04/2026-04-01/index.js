function fixPrankNumber(arr) {
	if (arr.length <= 1) {
		return [...arr];
	}

	const diffs = [];
	for (let i = 0; i < arr.length - 1; i++) {
		diffs.push(arr[i + 1] - arr[i]);
	}

	const count = {};
	for (const d of diffs) {
		count[d] = (count[d] || 0) + 1;
	}
	let d = diffs[0];
	let best = 0;
	for (const x of diffs) {
		if (count[x] > best) {
			best = count[x];
			d = x;
		}
	}

	const isValid = (a) => {
		for (let i = 0; i < a.length - 1; i++) {
			if (a[i + 1] - a[i] !== d) return false;
		}
		return true;
	};

	for (let k = 0; k < arr.length; k++) {
		const fixed = [...arr];
		if (k === 0) {
			fixed[0] = arr[1] - d;
		} else {
			fixed[k] = arr[k - 1] + d;
		}
		if (isValid(fixed)) {
			return fixed;
		}
	}

	return [...arr];
}

const x = fixPrankNumber([2, 4, 7, 8, 10]);
console.log(x);
