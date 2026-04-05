function isValidEquation(equation) {
	const parts = equation.split(" = ");
	if (parts.length !== 2) {
		return false;
	}
	const [left, rightStr] = parts;
	const expected = Number.parseInt(rightStr, 10);
	if (Number.isNaN(expected)) {
		return false;
	}

	const raw = left.split(" ");
	const tokens = [];
	for (const t of raw) {
		if (t === "+" || t === "-" || t === "*" || t === "/") {
			tokens.push(t);
		} else {
			const n = Number.parseInt(t, 10);
			if (Number.isNaN(n)) {
				return false;
			}
			tokens.push(n);
		}
	}

	return evaluateLeft(tokens) === expected;
}

function evaluateLeft(tokens) {
	const list = [...tokens];

	while (true) {
		const i = list.findIndex(
			(x, idx) => idx % 2 === 1 && (x === "*" || x === "/"),
		);
		if (i === -1) {
			break;
		}
		const a = list[i - 1];
		const b = list[i + 1];
		const v =
			list[i] === "*" ? a * b : Math.trunc(a / b);
		list.splice(i - 1, 3, v);
	}

	while (list.length > 1) {
		const a = list[0];
		const op = list[1];
		const b = list[2];
		const v = op === "+" ? a + b : a - b;
		list.splice(0, 3, v);
	}

	return list[0];
}

console.log(isValidEquation("2 + 3 - 1 = 4"));
console.log(isValidEquation("2 + 2 = 4"));
console.log(isValidEquation("2 + 3 * 2 = 8"));
