function daylightHours(latitude) {
    const table = [
        [-90, 24],
        [-75, 23],
        [-60, 21],
        [-45, 15],
        [-30, 13],
        [-15, 12],
        [0, 12],
        [15, 11],
        [30, 10],
        [45, 9],
        [60, 6],
        [75, 2],
        [90, 0],
    ];

    let closest = table[0];
    for (const entry of table) {
        if (Math.abs(entry[0] - latitude) < Math.abs(closest[0] - latitude)) {
            closest = entry;
        }
    }
    return closest[1];
}


const x = daylightHours(-90)
x;