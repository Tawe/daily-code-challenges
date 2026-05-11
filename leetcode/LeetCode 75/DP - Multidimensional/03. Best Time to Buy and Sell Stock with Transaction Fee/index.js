const maxProfit = function(prices, fee) {
     
    const n = prices.length;
    const dp = Array.from({ length: n }, () => Array(2).fill(0));
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i] - fee);
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
    }
    return dp[n-1][0];
};

const x = maxProfit([1,3,2,8,4,9], 2);
x;