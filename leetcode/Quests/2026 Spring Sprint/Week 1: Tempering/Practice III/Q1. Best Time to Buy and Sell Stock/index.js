const maxProfit = function(prices) {
    let minPrice = Infinity;
    let bestProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }

        const profit = prices[i] - minPrice;
        if (profit > bestProfit) {
            bestProfit = profit;
        }
    }

    return bestProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));