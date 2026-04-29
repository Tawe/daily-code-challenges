struct Solution;

impl Solution {
    pub fn maximum_score(grid: Vec<Vec<i32>>) -> i64 {
        let n = grid.len();
        let h = n + 1;

        let mut prefix = vec![vec![0_i64; h]; n];
        for c in 0..n {
            for r in 0..n {
                prefix[c][r + 1] = prefix[c][r] + grid[r][c] as i64;
            }
        }

        let neg_inf = i64::MIN / 4;
        let mut dp = vec![vec![neg_inf; h]; h];
        
        for h0 in 0..=n {
            dp[0][h0] = 0;
        }

        for col in 1..n {
            let mut next = vec![vec![neg_inf; h]; h];
            for left in 0..=n {
                for cur in 0..=n {
                    let base = dp[left][cur];
                    if base == neg_inf {
                        continue;
                    }
                    for right in 0..=n {
                        let m = left.max(right);
                        let gain = if m > cur {
                            prefix[col - 1][m] - prefix[col - 1][cur]
                        } else {
                            0
                        };
                        let cand = base + gain;
                        if cand > next[cur][right] {
                            next[cur][right] = cand;
                        }
                    }
                }
            }
            dp = next;
        }

        let mut ans = 0_i64;
        for left in 0..=n {
            for cur in 0..=n {
                let base = dp[left][cur];
                if base == neg_inf {
                    continue;
                }
                let m = left;
                let gain = if m > cur {
                    prefix[n - 1][m] - prefix[n - 1][cur]
                } else {
                    0
                };
                ans = ans.max(base + gain);
            }
        }

        ans
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(
            Solution::maximum_score(vec![
                vec![0, 0, 0, 0, 0],
                vec![0, 0, 3, 0, 0],
                vec![0, 1, 0, 0, 0],
                vec![5, 0, 0, 3, 0],
                vec![0, 0, 0, 0, 2]
            ]),
            11
        );
    }

    #[test]
    fn example_2() {
        assert_eq!(
            Solution::maximum_score(vec![
                vec![10, 9, 0, 0, 15],
                vec![7, 1, 0, 8, 0],
                vec![5, 20, 0, 11, 0],
                vec![0, 0, 0, 1, 2],
                vec![8, 12, 1, 10, 3]
            ]),
            94
        );
    }
}