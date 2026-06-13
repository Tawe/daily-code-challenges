function assignEdgeWeights(edges: number[][], queries: number[][]): number[] {
    const MOD = 1_000_000_007;
    const n = edges.length + 1;
    const LOG = Math.floor(Math.log2(n)) + 1;
    const adj: number[][] = Array.from({ length: n + 1 }, () => []);

    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const depth = new Array<number>(n + 1).fill(-1);
    const up = Array.from({ length: LOG }, () => new Array<number>(n + 1).fill(0));
    depth[1] = 0;
    up[0][1] = 0;

    const stack = [1];
    while (stack.length > 0) {
        const node = stack.pop()!;
        for (const next of adj[node]) {
            if (depth[next] !== -1) continue;
            depth[next] = depth[node] + 1;
            up[0][next] = node;
            stack.push(next);
        }
    }

    for (let j = 1; j < LOG; j++) {
        for (let i = 1; i <= n; i++) {
            up[j][i] = up[j - 1][up[j - 1][i]];
        }
    }

    const lca = (a: number, b: number): number => {
        let u = a;
        let v = b;
        if (depth[u] < depth[v]) [u, v] = [v, u];

        let diff = depth[u] - depth[v];
        for (let j = 0; j < LOG; j++) {
            if (diff & (1 << j)) u = up[j][u];
        }
        if (u === v) return u;

        for (let j = LOG - 1; j >= 0; j--) {
            if (up[j][u] !== up[j][v]) {
                u = up[j][u];
                v = up[j][v];
            }
        }
        return up[0][u];
    };

    const modPow = (exp: number): number => {
        let res = 1n;
        let base = 2n;
        const m = BigInt(MOD);
        let e = exp;
        while (e > 0) {
            if (e & 1) res = (res * base) % m;
            base = (base * base) % m;
            e >>= 1;
        }
        return Number(res);
    };

    return queries.map(([u, v]) => {
        const ancestor = lca(u, v);
        const k = depth[u] + depth[v] - 2 * depth[ancestor];
        return k === 0 ? 0 : modPow(k - 1);
    });
}

console.log(assignEdgeWeights([[1, 2]], [[1, 1], [1, 2]])); // [0, 1]
console.log(
    assignEdgeWeights(
        [[1, 2], [1, 3], [3, 4], [3, 5]],
        [[1, 4], [3, 4], [2, 5]]
    )
); // [2, 1, 4]
