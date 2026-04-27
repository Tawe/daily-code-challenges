struct Solution;

impl Solution {
    pub fn contains_cycle(grid: Vec<Vec<char>>) -> bool {
        let m = grid.len();
        let n = grid[0].len();
        let mut state = vec![vec![0_u8; n]; m];
        let dirs: [(isize, isize); 4] = [(0, 1), (1, 0), (0, -1), (-1, 0)];

        for sr in 0..m {
            for sc in 0..n {
                if state[sr][sc] != 0 {
                    continue;
                }

                let target = grid[sr][sc];
                let mut stack: Vec<(usize, usize, isize, isize, usize)> =
                    vec![(sr, sc, -1, -1, 0)];
                state[sr][sc] = 1;

                while let Some((r, c, pr, pc, dir_idx)) = stack.pop() {
                    if dir_idx == 4 {
                        state[r][c] = 2;
                        continue;
                    }

                    stack.push((r, c, pr, pc, dir_idx + 1));

                    let (dr, dc) = dirs[dir_idx];
                    let nr = r as isize + dr;
                    let nc = c as isize + dc;
                    if nr < 0 || nr >= m as isize || nc < 0 || nc >= n as isize {
                        continue;
                    }
                    let nr = nr as usize;
                    let nc = nc as usize;
                    if grid[nr][nc] != target {
                        continue;
                    }
                    if nr as isize == pr && nc as isize == pc {
                        continue;
                    }

                    match state[nr][nc] {
                        0 => {
                            state[nr][nc] = 1;
                            stack.push((nr, nc, r as isize, c as isize, 0));
                        }
                        1 => return true,
                        _ => {}
                    }
                }
            }
        }

        false
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        let grid = vec![
            vec!['a', 'a', 'a', 'a'],
            vec!['a', 'b', 'b', 'a'],
            vec!['a', 'b', 'b', 'a'],
            vec!['a', 'a', 'a', 'a'],
        ];
        assert!(Solution::contains_cycle(grid));
    }

    #[test]
    fn example_2() {
        let grid = vec![
            vec!['c', 'c', 'c', 'a'],
            vec!['c', 'd', 'c', 'c'],
            vec!['c', 'c', 'e', 'c'],
            vec!['f', 'c', 'c', 'c'],
        ];
        assert!(Solution::contains_cycle(grid));
    }

    #[test]
    fn example_3() {
        let grid = vec![
            vec!['a', 'b', 'b'],
            vec!['b', 'z', 'b'],
            vec!['b', 'b', 'a'],
        ];
        assert!(!Solution::contains_cycle(grid));
    }
}