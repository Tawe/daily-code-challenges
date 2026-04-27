struct Solution;

impl Solution {
    pub fn has_valid_path(grid: Vec<Vec<i32>>) -> bool {
        let m = grid.len();
        let n = grid[0].len();
        let mut visited = vec![vec![false; n]; m];
        let mut stack = vec![(0_usize, 0_usize)];
        visited[0][0] = true;

        while let Some((r, c)) = stack.pop() {
            if r == m - 1 && c == n - 1 {
                return true;
            }

            for &(dr, dc) in Self::dirs(grid[r][c]).iter() {
                let nr = r as isize + dr;
                let nc = c as isize + dc;

                if nr < 0 || nr >= m as isize || nc < 0 || nc >= n as isize {
                    continue;
                }

                let nr = nr as usize;
                let nc = nc as usize;
                if visited[nr][nc] {
                    continue;
                }

                if Self::dirs(grid[nr][nc]).iter().any(|&(bdr, bdc)| bdr == -dr && bdc == -dc) {
                    visited[nr][nc] = true;
                    stack.push((nr, nc));
                }
            }
        }

        false
    }

    fn dirs(street: i32) -> &'static [(isize, isize)] {
        match street {
            1 => &[(0, -1), (0, 1)],
            2 => &[(-1, 0), (1, 0)],
            3 => &[(0, -1), (1, 0)],
            4 => &[(0, 1), (1, 0)],
            5 => &[(0, -1), (-1, 0)],
            _ => &[(0, 1), (-1, 0)],
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        let grid = vec![vec![2, 4, 3], vec![6, 5, 2]];
        assert!(Solution::has_valid_path(grid));
    }

    #[test]
    fn example_2() {
        let grid = vec![vec![1, 2, 1], vec![1, 2, 1]];
        assert!(!Solution::has_valid_path(grid));
    }

    #[test]
    fn example_3() {
        let grid = vec![vec![1, 1, 2]];
        assert!(!Solution::has_valid_path(grid));
    }

    #[test]
    fn single_cell_is_valid() {
        let grid = vec![vec![1]];
        assert!(Solution::has_valid_path(grid));
    }
}