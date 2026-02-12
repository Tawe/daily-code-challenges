function largestDifference(skater1, skater2) {
    const laps = Math.min(skater1.length, skater2.length);
    let maxDifference = -1;
    let lapNumber = 0;

    for (let i = 0; i < laps; i++) {
        const difference = Math.abs(skater1[i] - skater2[i]);
        if (difference > maxDifference) {
            maxDifference = difference;
            lapNumber = i + 1;
        }
    }

    return lapNumber;
}

const x = largestDifference([26.11, 25.80, 25.92, 26.23, 26.07], [25.93, 25.74, 26.53, 26.11, 26.30]) 
x;
