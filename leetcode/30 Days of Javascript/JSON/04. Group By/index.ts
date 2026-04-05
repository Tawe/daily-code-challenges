interface Array<T> {
	groupBy(fn: (item: T) => string): Record<string, T[]>;
}

Array.prototype.groupBy = function <T>(
	this: T[],
	fn: (item: T) => string,
): Record<string, T[]> {
	const result: Record<string, T[]> = {};
	for (const item of this) {
		const key = fn(item);
		if (!result[key]) {
			result[key] = [];
		}
		result[key].push(item);
	}
	return result;
};

const arr = [1, 2, 3, 4, 5];
console.log(arr.groupBy((x) => x.toString()));
