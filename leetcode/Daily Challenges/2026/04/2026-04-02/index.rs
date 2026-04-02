struct Solution;

impl Solution {
    pub fn maximum_amount(coins: Vec<Vec<i32>>) -> i32 {
        let m = coins.len();
        let n = coins[0].len();
        let neg_inf = i32::MIN / 4;
        let mut dp = vec![vec![[neg_inf; 3]; n]; m];
        let v0 = coins[0][0];

        if v0 >= 0 {
            dp[0][0][0] = v0;
        } else {
            dp[0][0][0] = v0;
            dp[0][0][1] = 0;
        }

        for i in 0..m {
            for j in 0..n {
                if i == 0 && j == 0 {
                    continue;
                }
                let v = coins[i][j];

                for k in 0..=2 {
                    let mut best_prev = neg_inf;
                    if i > 0 {
                        best_prev = best_prev.max(dp[i - 1][j][k]);
                    }
                    if j > 0 {
                        best_prev = best_prev.max(dp[i][j - 1][k]);
                    }
                    if best_prev != neg_inf {
                        dp[i][j][k] = dp[i][j][k].max(best_prev + v);
                    }

                    if v < 0 && k > 0 {
                        let mut best_prev_neutral = neg_inf;
                        if i > 0 {
                            best_prev_neutral = best_prev_neutral.max(dp[i - 1][j][k - 1]);
                        }
                        if j > 0 {
                            best_prev_neutral = best_prev_neutral.max(dp[i][j - 1][k - 1]);
                        }
                        if best_prev_neutral != neg_inf {
                            dp[i][j][k] = dp[i][j][k].max(best_prev_neutral);
                        }
                    }
                }
            }
        }

        dp[m - 1][n - 1][0]
            .max(dp[m - 1][n - 1][1])
            .max(dp[m - 1][n - 1][2])
    }
}

fn main() {
    let coins = vec![vec![0, 1, -1], vec![1, -2, 3], vec![2, -3, 4]];
    let result = Solution::maximum_amount(coins);
    println!("{}", result);
}