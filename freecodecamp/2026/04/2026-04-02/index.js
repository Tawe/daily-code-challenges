function capitalizeFibonacci(str) {
	const n = str.length;
	const fibIndex = new Set([0]);
	if (n > 1) {
		fibIndex.add(1);
	}
	let a = 0;
	let b = 1;
	while (true) {
		const c = a + b;
		if (c >= n) {
			break;
		}
		fibIndex.add(c);
		a = b;
		b = c;
	}

	const chars = str.split("");
	for (let i = 0; i < n; i++) {
		if (fibIndex.has(i)) {
			chars[i] = chars[i].toUpperCase();
		} else {
			chars[i] = chars[i].toLowerCase();
		}
	}
	return chars.join("");
}

console.log(capitalizeFibonacci("hello world"));
console.log(capitalizeFibonacci("HELLO WORLD"));
