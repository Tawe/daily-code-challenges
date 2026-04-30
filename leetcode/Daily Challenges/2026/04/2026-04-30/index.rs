struct Solution;

impl Solution {
    pub fn max_path_score(grid: Vec<Vec<i32>>, k: i32) -> i32 {
        let m = grid.len();
        let n = grid[0].len();
        let k = k as usize;

        let mut prev = vec![vec![-1; k + 1]; n];

        for i in 0..m {
            let mut curr = vec![vec![-1; k + 1]; n];

            for j in 0..n {
                let val = grid[i][j] as i32;
                let add_score = val;
                let add_cost = if val == 0 { 0 } else { 1 };

                if i == 0 && j == 0 {
                    curr[0][0] = 0;
                    continue;
                }

                for c in add_cost..=k {
                    let from_cost = c - add_cost;
                    let mut best_prev = -1_i32;

                    if i > 0 {
                        best_prev = best_prev.max(prev[j][from_cost]);
                    }
                    if j > 0 {
                        best_prev = best_prev.max(curr[j - 1][from_cost]);
                    }

                    if best_prev >= 0 {
                        curr[j][c] = best_prev + add_score;
                    }
                }
            }

            prev = curr;
        }

        prev[n - 1].iter().copied().max().unwrap_or(-1)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(Solution::max_path_score(vec![vec![0, 1], vec![2, 0]], 1), 2);
    }

    #[test]
    fn example_2() {
        assert_eq!(Solution::max_path_score(vec![vec![0, 1], vec![1, 2]], 1), -1);
    }

    #[test]
    fn zero_cost_path() {
        assert_eq!(
            Solution::max_path_score(vec![vec![0, 0, 0], vec![0, 0, 0]], 0),
            0
        );
    }
}