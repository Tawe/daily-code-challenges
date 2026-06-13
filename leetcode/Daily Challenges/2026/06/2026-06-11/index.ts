function assignEdgeWeights(edges: number[][]): number {
    const mod = 1_000_000_007;
    const n = edges.length + 1;
    const g: number[][] = Array.from({ length: n + 1 }, () => []);

    for (const [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
    }

    let maxDepth = 0;
    const stack: [number, number, number][] = [[1, 0, 0]];

    while (stack.length > 0) {
        const [i, fa, depth] = stack.pop()!;
        maxDepth = Math.max(maxDepth, depth);
        for (const j of g[i]) {
            if (j !== fa) stack.push([j, i, depth + 1]);
        }
    }

    const exp = maxDepth - 1;
    let res = 1n;
    let base = 2n;
    const m = BigInt(mod);
    let e = exp;

    while (e > 0) {
        if (e & 1) res = (res * base) % m;
        base = (base * base) % m;
        e >>= 1;
    }

    return Number(res);
}

console.log(assignEdgeWeights([[1, 2]])); // 1
console.log(assignEdgeWeights([[1, 2], [1, 3], [3, 4], [3, 5]])); // 2
