struct Solution;

impl Solution {
    pub fn robot_sim(commands: Vec<i32>, obstacles: Vec<Vec<i32>>) -> i32 {
        use std::collections::HashSet;

        let blocked: HashSet<(i32, i32)> = obstacles
            .into_iter()
            .map(|p| (p[0], p[1]))
            .collect();

        let dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)];
        let mut d = 0usize;
        let (mut x, mut y) = (0i32, 0i32);
        let mut ans = 0i32;

        for c in commands {
            match c {
                -2 => d = (d + 3) % 4,
                -1 => d = (d + 1) % 4,
                k => {
                    let (dx, dy) = dirs[d];
                    for _ in 0..k {
                        let nx = x + dx;
                        let ny = y + dy;
                        if blocked.contains(&(nx, ny)) {
                            break;
                        }
                        x = nx;
                        y = ny;
                        ans = ans.max(x * x + y * y);
                    }
                }
            }
        }
        ans
    }
}

#[test]
fn test_robot_sim() {
    let commands = vec![4, -1, 3];
    let obstacles: Vec<Vec<i32>> = vec![];
    assert_eq!(Solution::robot_sim(commands, obstacles), 25);
}

#[test]
fn test_examples_2_and_3() {
    assert_eq!(
        Solution::robot_sim(vec![4, -1, 4, -2, 4], vec![vec![2, 4]]),
        65
    );
    assert_eq!(
        Solution::robot_sim(vec![6, -1, -1, 6], vec![vec![0, 0]]),
        36
    );
}