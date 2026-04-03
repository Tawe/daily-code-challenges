struct Solution;

impl Solution {
    pub fn max_walls(robots: Vec<i32>, distance: Vec<i32>, walls: Vec<i32>) -> i32 {
        let n = robots.len();
        let mut arr: Vec<(i32, i32)> = robots
            .into_iter()
            .zip(distance.into_iter())
            .collect();
        arr.sort_by_key(|&(p, _)| p);

        let mut walls = walls;
        walls.sort_unstable();

        let mut memo = vec![vec![None; 2]; n];

        fn dfs(
            i: i32,
            j: usize,
            arr: &[(i32, i32)],
            walls: &[i32],
            memo: &mut [Vec<Option<i32>>],
        ) -> i32 {
            if i < 0 {
                return 0;
            }
            let i = i as usize;
            if let Some(v) = memo[i][j] {
                return v;
            }

            let n = arr.len();
            let (px, pd) = arr[i];

            let mut left = px - pd;
            if i > 0 {
                left = left.max(arr[i - 1].0 + 1);
            }
            let l = lower_bound(walls, left);
            let r = lower_bound(walls, px + 1);
            let mut ans = dfs(i as i32 - 1, 0, arr, walls, memo) + (r - l) as i32;

            let mut right = px + pd;
            if i + 1 < n {
                let (nx, nd) = arr[i + 1];
                if j == 0 {
                    right = right.min(nx - nd - 1);
                } else {
                    right = right.min(nx - 1);
                }
            }
            let l2 = lower_bound(walls, px);
            let r2 = lower_bound(walls, right + 1);
            ans = ans.max(dfs(i as i32 - 1, 1, arr, walls, memo) + (r2 - l2) as i32);

            memo[i][j] = Some(ans);
            ans
        }

        dfs(n as i32 - 1, 1, &arr, &walls, &mut memo)
    }
}

/// First index `i` with `walls[i] >= x` (like Python bisect_left).
fn lower_bound(walls: &[i32], x: i32) -> usize {
    walls.partition_point(|&w| w < x)
}

fn main() {
    println!(
        "{}",
        Solution::max_walls(vec![4], vec![3], vec![1, 10])
    );
    println!(
        "{}",
        Solution::max_walls(vec![10, 2], vec![5, 1], vec![5, 2, 7])
    );
    println!(
        "{}",
        Solution::max_walls(vec![1, 2], vec![100, 1], vec![10])
    );
}
