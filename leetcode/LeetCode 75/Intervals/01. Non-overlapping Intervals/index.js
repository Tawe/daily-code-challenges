const eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let end = intervals[0][1];
    let kept = 1;

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= end) {
            kept++;
            end = intervals[i][1];
        }
    }

    return intervals.length - kept;
};

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]));
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]));
console.log(eraseOverlapIntervals([[1, 2], [2, 3]]));