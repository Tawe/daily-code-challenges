function getFastestSpeed(times) {
    const segments = [320, 280, 350, 300, 250];
    let fastestSpeed = 0;
    let fastestSegment = 0;

    for (let i = 0; i < times.length; i++) {
        const speed = segments[i] / times[i];
        if (speed > fastestSpeed) {
            fastestSpeed = speed;
            fastestSegment = i + 1;
        }
    }
    return `The luger's fastest speed was ${fastestSpeed.toFixed(2)} m/s on segment ${fastestSegment}.`;
}

const x = getFastestSpeed([9.523, 8.234, 10.012, 9.001, 7.128])
x;