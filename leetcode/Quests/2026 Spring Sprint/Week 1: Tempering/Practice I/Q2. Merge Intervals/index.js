const merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = merged[merged.length - 1];

        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    return merged;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));
console.log(merge([[4,7],[1,4]]));