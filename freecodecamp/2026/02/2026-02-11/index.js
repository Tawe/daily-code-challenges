function computeScore(judgeScores, ...penalties) {
    const baseScore = judgeScores.sort((a, b) => a - b).slice(1, -1).reduce((acc, score) => acc + score, 0)
    return baseScore-penalties.reduce((acc, penalty) => acc + penalty, 0);
}

const x = computeScore([8.0, 8.5, 9.0, 8.5, 9.0, 8.0, 9.0, 8.5, 9.0, 8.5], 0.5, 1.0)
x;
