function maxSideLength(mat: number[][], threshold: number): number {
    const m = mat.length;
    const n = mat[0].length;
    const prefix: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let r = 1; r <= m; r++) {
        for (let c = 1; c <= n; c++) {
            prefix[r][c] =
                mat[r - 1][c - 1] +
                prefix[r - 1][c] +
                prefix[r][c - 1] -
                prefix[r - 1][c - 1];
        }
    }

    const squareSum = (r1: number, c1: number, k: number): number => {
        const r2 = r1 + k;
        const c2 = c1 + k;
        return prefix[r2][c2] - prefix[r1][c2] - prefix[r2][c1] + prefix[r1][c1];
    };

    const canMake = (k: number): boolean => {
        if (k === 0) return true;
        for (let r = 0; r + k <= m; r++) {
            for (let c = 0; c + k <= n; c++) {
                if (squareSum(r, c, k) <= threshold) return true;
            }
        }
        return false;
    };

    let lo = 0;
    let hi = Math.min(m, n);

    while (lo < hi) {
        const mid = Math.floor((lo + hi + 1) / 2);
        if (canMake(mid)) {
            lo = mid;
        } else {
            hi = mid - 1;
        }
    }

    return lo;
}

const x = maxSideLength([[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], 4);
x;