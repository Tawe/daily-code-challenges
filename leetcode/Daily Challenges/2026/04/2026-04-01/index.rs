struct Solution;

impl Solution {
    pub fn survived_robots_healths(
        positions: Vec<i32>,
        mut healths: Vec<i32>,
        directions: String,
    ) -> Vec<i32> {
        let n = positions.len();
        let dirs = directions.as_bytes();

        let mut order: Vec<usize> = (0..n).collect();
        order.sort_by_key(|&i| positions[i]);

        let mut stack: Vec<usize> = Vec::new();

        for &i in &order {
            if dirs[i] == b'R' {
                stack.push(i);
                continue;
            }

            let mut h = healths[i];
            while h > 0 {
                let Some(&j) = stack.last() else {
                    break;
                };
                let rh = healths[j];
                if rh > h {
                    healths[j] -= 1;
                    h = 0;
                } else if rh < h {
                    stack.pop();
                    healths[j] = 0;
                    h -= 1;
                } else {
                    stack.pop();
                    healths[j] = 0;
                    h = 0;
                }
            }
            healths[i] = h;
        }

        healths
            .into_iter()
            .enumerate()
            .filter(|&(_, h)| h > 0)
            .map(|(_, h)| h)
            .collect()
    }
}

fn main() {
    let positions = vec![5, 4, 3, 2, 1];
    let healths = vec![2, 17, 9, 15, 10];
    let directions = "RRRRR".to_string();
    println!(
        "{:?}",
        Solution::survived_robots_healths(positions, healths, directions)
    );

    let positions = vec![3, 5, 2, 6];
    let healths = vec![10, 10, 15, 12];
    let directions = "RLRL".to_string();
    println!(
        "{:?}",
        Solution::survived_robots_healths(positions, healths, directions)
    );
}
