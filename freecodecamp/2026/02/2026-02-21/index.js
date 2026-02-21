function scoreCurling(house) {
    const redDistances = [];
    const yellowDistances = [];

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            const cell = house[row][col];
            if (cell !== "R" && cell !== "Y") continue;

            // Ring distance from the button at [2, 2]:
            // button = 0, surrounding ring = 1, outer edge = 2.
            const distance = Math.max(Math.abs(row - 2), Math.abs(col - 2));

            if (cell === "R") {
                redDistances.push(distance);
            } else {
                yellowDistances.push(distance);
            }
        }
    }

    if (redDistances.length === 0 && yellowDistances.length === 0) {
        return "No points awarded";
    }

    const redClosest = redDistances.length ? Math.min(...redDistances) : Infinity;
    const yellowClosest = yellowDistances.length ? Math.min(...yellowDistances) : Infinity;

    if (redClosest === yellowClosest) {
        return "No points awarded";
    }

    if (redClosest < yellowClosest) {
        const points = redDistances.filter((d) => d < yellowClosest).length;
        return points > 0 ? `R: ${points}` : "No points awarded";
    }

    const points = yellowDistances.filter((d) => d < redClosest).length;
    return points > 0 ? `Y: ${points}` : "No points awarded";
}


const x = scoreCurling([
    [".", ".", "R", ".", "."],
    [".", "R", ".", ".", "."],
    ["Y", ".", ".", ".", "."],
    [".", "R", ".", ".", "."],
    [".", ".", ".", ".", "."]
]);
x;
