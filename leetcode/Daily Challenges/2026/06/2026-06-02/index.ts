function earliestFinishTime(
    landStartTime: number[],
    landDuration: number[],
    waterStartTime: number[],
    waterDuration: number[]
): number {
    let ans = Infinity;

    for (let i = 0; i < landStartTime.length; i++) {
        for (let j = 0; j < waterStartTime.length; j++) {
            const landEnd = landStartTime[i] + landDuration[i];
            const waterStart = Math.max(landEnd, waterStartTime[j]);
            ans = Math.min(ans, waterStart + waterDuration[j]);

            const waterEnd = waterStartTime[j] + waterDuration[j];
            const landStart = Math.max(waterEnd, landStartTime[i]);
            ans = Math.min(ans, landStart + landDuration[i]);
        }
    }

    return ans;
}

console.log(earliestFinishTime([2, 8], [4, 1], [6], [3])); // 9
console.log(earliestFinishTime([5], [3], [1], [10]));     // 14
