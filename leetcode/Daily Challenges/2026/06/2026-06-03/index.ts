function upperBound(arr: number[], target: number): number {
    let lo = 0;
    let hi = arr.length;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (arr[mid] <= target) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}

function earliestFinishTime(
    landStartTime: number[],
    landDuration: number[],
    waterStartTime: number[],
    waterDuration: number[]
): number {
    const n = landStartTime.length;
    const m = waterStartTime.length;
    let ans = Infinity;

    const water = waterStartTime
        .map((s, j) => ({ s, d: waterDuration[j] }))
        .sort((a, b) => a.s - b.s);
    const waterStarts = water.map((w) => w.s);

    const prefixMinWaterDur = new Array<number>(m);
    for (let k = 0; k < m; k++) {
        prefixMinWaterDur[k] =
            k === 0 ? water[k].d : Math.min(prefixMinWaterDur[k - 1], water[k].d);
    }
    const suffixMinWaterEnd = new Array<number>(m);
    for (let k = m - 1; k >= 0; k--) {
        const end = water[k].s + water[k].d;
        suffixMinWaterEnd[k] =
            k === m - 1 ? end : Math.min(suffixMinWaterEnd[k + 1], end);
    }

    for (let i = 0; i < n; i++) {
        const landEnd = landStartTime[i] + landDuration[i];
        const idx = upperBound(waterStarts, landEnd) - 1;
        if (idx >= 0) ans = Math.min(ans, landEnd + prefixMinWaterDur[idx]);
        const idx2 = idx + 1;
        if (idx2 < m) ans = Math.min(ans, suffixMinWaterEnd[idx2]);
    }

    const land = landStartTime
        .map((s, i) => ({ s, d: landDuration[i] }))
        .sort((a, b) => a.s - b.s);
    const landStarts = land.map((l) => l.s);

    const prefixMinLandDur = new Array<number>(n);
    for (let k = 0; k < n; k++) {
        prefixMinLandDur[k] =
            k === 0 ? land[k].d : Math.min(prefixMinLandDur[k - 1], land[k].d);
    }
    const suffixMinLandEnd = new Array<number>(n);
    for (let k = n - 1; k >= 0; k--) {
        const end = land[k].s + land[k].d;
        suffixMinLandEnd[k] =
            k === n - 1 ? end : Math.min(suffixMinLandEnd[k + 1], end);
    }

    for (let j = 0; j < m; j++) {
        const waterEnd = waterStartTime[j] + waterDuration[j];
        const idx = upperBound(landStarts, waterEnd) - 1;
        if (idx >= 0) ans = Math.min(ans, waterEnd + prefixMinLandDur[idx]);
        const idx2 = idx + 1;
        if (idx2 < n) ans = Math.min(ans, suffixMinLandEnd[idx2]);
    }

    return ans;
}

console.log(earliestFinishTime([2, 8], [4, 1], [6], [3])); // 9
console.log(earliestFinishTime([5], [3], [1], [10])); // 14
