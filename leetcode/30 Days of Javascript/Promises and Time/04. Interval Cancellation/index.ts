type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

function cancellable(fn: Fn, args: JSONValue[], t: number): () => void {
	fn(...args);
	const id = setInterval(() => {
		fn(...args);
	}, t);
	return () => {
		clearInterval(id);
	};
}

(() => {
	const result: JSONValue[] = [];
	const args: JSONValue[] = [2];
	const t = 20;
	const cancelT = 50;
	const start = performance.now();
	const log: Fn = (...argsArr) => {
		result.push(...argsArr);
		const diff = Math.floor(performance.now() - start);
		console.log(diff, result.join(", "));
	};
	const cancel = cancellable(log, args, t);
	setTimeout(() => cancel(), cancelT);
})();

export { cancellable };
