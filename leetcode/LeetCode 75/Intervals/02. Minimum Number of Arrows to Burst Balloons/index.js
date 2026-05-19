const findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1]);
    let end = points[0][1];
    let arrows = 1;

    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > end) {
            arrows++;
            end = points[i][1];
        }
    }

    return arrows;  
};

console.log(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]));
console.log(findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]]));
console.log(findMinArrowShots([[1, 2], [2, 3], [3, 4], [4, 5]]));