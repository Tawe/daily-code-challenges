function minimumCost(cost: number[]): number {
    cost.sort((a, b) => a - b);
    let total = 0;
    for (let i = cost.length - 1; i >= 0; i -= 3) {
        total += cost[i];
        if (i >= 1) total += cost[i - 1];
    }
    return total;
}

console.log(minimumCost([1, 2, 3]));
console.log(minimumCost([6, 5, 7, 9, 2, 2]));
console.log(minimumCost([5, 5]));
