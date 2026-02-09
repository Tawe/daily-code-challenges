function calculatePenaltyDistance(rounds) {
    const totalTargets = 5;
    const penalty = 150;

    let totalPenalty = 0
    for(let i = 0; i < rounds.length; i++){
        if(rounds[i] !== totalTargets){
            totalPenalty += ((totalTargets - rounds[i]) * penalty)
        }
    }

    return totalPenalty;
}

const x = calculatePenaltyDistance([1, 2, 3, 4, 5]);
x;