function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {
    const jumpersScores = [165.5, 172.0, 158.0, 180.0, 169.5, 175.0, 162.0, 170.0].sort((a, b) => b - a);
    const score = distancePoints + stylePoints + windComp + kPointBonus;
    for (let i = 0; i < jumpersScores.length; i++) {
        if (score > jumpersScores[i]) {
            return i === 0 ? "Gold" : i === 1 ? "Silver" : i === 2 ? "Bronze" : "No Medal";
        }
    }
    return "No Medal";
}

const x = skiJumpMedal(100, 100, 100, 100);
x;