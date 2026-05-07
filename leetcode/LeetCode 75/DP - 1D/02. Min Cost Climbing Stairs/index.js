const minCostClimbingStairs = function(cost) {
    let prev2 = 0;
    let prev1 = 0;

    for (let i = 2; i <= cost.length; i++) {
        const oneStep = prev1 + cost[i - 1];
        const twoSteps = prev2 + cost[i - 2];
        const current = Math.min(oneStep, twoSteps);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};

const x = minCostClimbingStairs([10,15,20]);
x;