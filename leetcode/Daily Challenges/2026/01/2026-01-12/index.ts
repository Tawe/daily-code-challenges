function minTimeToVisitAllPoints(points: number[][]): number {
    let time = 0;
    for (let i = 0; i < points.length - 1; i++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[i + 1];
        time += Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
    }
    return time;
}

const x = minTimeToVisitAllPoints([[3,2],[-2,2]]);
x;