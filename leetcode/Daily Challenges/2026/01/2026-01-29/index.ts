function minimumCost(source: string, target: string, original: string[], changed: string[], cost: number[]): number {
    const INF = Number.MAX_SAFE_INTEGER;
    const N = 26;

    const dist: number[][] = Array.from({ length: N }, () => Array(N).fill(INF));

    for (let i = 0; i < N; i++) {
        dist[i][i] = 0;
    }

    for (let i = 0; i < original.length; i++) {
        const a = original[i].charCodeAt(0) - 97;
        const b = changed[i].charCodeAt(0) - 97;
        dist[a][b] = Math.min(dist[a][b], cost[i]);
    }
    for (let k = 0; k < N; k++) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (dist[i][k] !== INF && dist[k][j] !== INF) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }

    let total = 0;
    for (let i = 0; i < source.length; i++) {
        const a = source.charCodeAt(i) - 97;
        const b = target.charCodeAt(i) - 97;

        if (a === b) continue;

        if (dist[a][b] === INF) {
            return -1;
        }
        total += dist[a][b];
    }

    return total;
}

const x = minimumCost("abcd", "acbe", ["a","b","c","c","e","d"], ["b","c","b","e","b","e"], [2,5,5,1,2,20]);
x;