var maxProfit = function(n, present, future, hierarchy, budget) {
    const B = budget;
    const NEG = -1e15;
     const children = Array.from({ length: n + 1 }, () => []);
    
     for (const [u, v] of hierarchy) children[u].push(v);

        const dp0 = Array(n + 1);
        const dp1 = Array(n + 1);

        function mergeKnapsack(a, b) {
            const c = new Array(B + 1).fill(NEG);
            for (let i = 0; i <= B; i++) {
                if (a[i] <= NEG / 2) continue;
                for (let j = 0; j + i <= B; j++) {
                    if (b[j] <= NEG / 2) continue;
                    const k = i + j;
                    const val = a[i] + b[j];
                    if (val > c[k]) c[k] = val;
                }
            }
            return c;
        }

        function dfs(u) {
            for (const v of children[u]) dfs(v);

            let childNoDisc = new Array(B + 1).fill(NEG);
            childNoDisc[0] = 0;
            for (const v of children[u]) {
                childNoDisc = mergeKnapsack(childNoDisc, dp0[v]);
            }

            let childWithDisc = new Array(B + 1).fill(NEG);
            childWithDisc[0] = 0;
            for (const v of children[u]) {
                childWithDisc = mergeKnapsack(childWithDisc, dp1[v]);
            }

            const fullCost = present[u - 1];
            const discCost = Math.floor(present[u - 1] / 2);
            const fullProfit = future[u - 1] - fullCost;
            const discProfit = future[u - 1] - discCost;

            dp0[u] = new Array(B + 1).fill(NEG);
            dp1[u] = new Array(B + 1).fill(NEG);

            for (let b = 0; b <= B; b++) {
                dp0[u][b] = Math.max(dp0[u][b], childNoDisc[b]);
                dp1[u][b] = Math.max(dp1[u][b], childNoDisc[b]);

                if (b >= fullCost && childWithDisc[b - fullCost] > NEG / 2) {
                    dp0[u][b] = Math.max(dp0[u][b], childWithDisc[b - fullCost] + fullProfit);
                }
                if (b >= discCost && childWithDisc[b - discCost] > NEG / 2) {

                    dp1[u][b] = Math.max(dp1[u][b], childWithDisc[b - discCost] + discProfit);
                }
            }
        }

    dfs(1);

    let ans = 0;
    for (let b = 0; b <= B; b++) ans = Math.max(ans, dp0[1][b]);
    return ans;
};

const x = maxProfit(3, [5,2,3], [8,5,6], [[1,2],[2,3]], 7)
x;