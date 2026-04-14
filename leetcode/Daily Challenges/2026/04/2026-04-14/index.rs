struct Solution;

impl Solution {
    pub fn minimum_total_distance(mut robot: Vec<i32>, mut factory: Vec<Vec<i32>>) -> i64 {
        robot.sort_unstable();
        factory.sort_unstable_by_key(|f| f[0]);

        let n = robot.len();
        let m = factory.len();
        let inf = i64::MAX / 4;
        let mut memo = vec![vec![-1_i64; m + 1]; n + 1];

        fn dfs(
            i: usize,
            j: usize,
            robot: &[i32],
            factory: &[Vec<i32>],
            memo: &mut [Vec<i64>],
            inf: i64,
        ) -> i64 {
            if i == robot.len() {
                return 0;
            }
            if j == factory.len() {
                return inf;
            }
            if memo[i][j] != -1 {
                return memo[i][j];
            }

            let mut best = dfs(i, j + 1, robot, factory, memo, inf);
            let position = factory[j][0] as i64;
            let limit = factory[j][1] as usize;
            let mut move_cost = 0_i64;

            for used in 1..=limit.min(robot.len() - i) {
                move_cost += (robot[i + used - 1] as i64 - position).abs();
                let next = dfs(i + used, j + 1, robot, factory, memo, inf);
                best = best.min(move_cost + next);
            }

            memo[i][j] = best;
            best
        }

        dfs(0, 0, &robot, &factory, &mut memo, inf)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(
            Solution::minimum_total_distance(vec![0, 4, 6], vec![vec![2, 2], vec![6, 2]]),
            4
        );
    }

    #[test]
    fn example_2() {
        assert_eq!(
            Solution::minimum_total_distance(vec![1, -1], vec![vec![-2, 1], vec![2, 1]]),
            2
        );
    }
}