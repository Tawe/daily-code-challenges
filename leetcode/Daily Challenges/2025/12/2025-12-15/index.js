var getDescentPeriods = function(prices) {
    let total = 0;
    let run = 1; 
    total += run;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] === prices[i - 1] - 1) {
            run++;
        } else {
            run = 1;
        }
        total += run;
    }

    return total;
};