const calculateStartDelays = (jumpScores) => (jumpScores.map((score) => {
    return Math.ceil((Math.max(...jumpScores) - score) * 1.5);
}));

const x = calculateStartDelays([100, 95, 90, 85, 80])
x;