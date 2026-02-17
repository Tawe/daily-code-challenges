function checkEligibility(athleteWeights, sledWeight) {
    const teamSize = athleteWeights.length;
    const minSledWeight = teamSize === 1 ? 162 : teamSize === 2 ? 170 : 210;
    const maxTotalWeight = teamSize === 1 ? 247 : teamSize === 2 ? 390 : 630;

    const athleteTotal = athleteWeights.reduce((a, b) => a + b, 0);
    const totalWeight = athleteTotal + sledWeight;

    if (sledWeight < minSledWeight || totalWeight > maxTotalWeight) {
        return "Not Eligible";
    }
    return "Eligible";
}


const x = checkEligibility([80], 160) 
x;