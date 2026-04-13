use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn minimum_distance(word: String) -> i32 {
        let pos = Self::keyboard_positions();
        let w: Vec<u8> = word.bytes().collect();
        let mut memo = HashMap::new();
        Self::dfs(0, -1, -1, &w, &pos, &mut memo)
    }

    fn keyboard_positions() -> [(i32, i32); 26] {
        let mut p = [(0i32, 0i32); 26];
        let rows = ["ABCDEF", "GHIJKL", "MNOPQR", "STUVWX", "YZ"];
        for (i, row) in rows.iter().enumerate() {
            for (j, c) in row.chars().enumerate() {
                let idx = (c as u8 - b'A') as usize;
                p[idx] = (i as i32, j as i32);
            }
        }
        p
    }

    fn normalize_fingers(a: i8, b: i8) -> (i8, i8) {
        match (a < 0, b < 0) {
            (true, true) => (-1, -1),
            (true, false) => (b, -1),
            (false, true) => (a, -1),
            (false, false) => {
                if a <= b {
                    (a, b)
                } else {
                    (b, a)
                }
            }
        }
    }

    fn manhattan(pos: &[(i32, i32)], u: usize, v: usize) -> i32 {
        let (x1, y1) = pos[u];
        let (x2, y2) = pos[v];
        (x1 - x2).abs() + (y1 - y2).abs()
    }

    fn dfs(
        i: usize,
        fa: i8,
        fb: i8,
        w: &[u8],
        pos: &[(i32, i32)],
        memo: &mut HashMap<(usize, i8, i8), i32>,
    ) -> i32 {
        let (fa, fb) = Self::normalize_fingers(fa, fb);
        if i == w.len() {
            return 0;
        }
        let key = (i, fa, fb);
        if let Some(&v) = memo.get(&key) {
            return v;
        }
        let t = (w[i] - b'A') as usize;

        let cost_a = if fa < 0 {
            0
        } else {
            Self::manhattan(pos, fa as usize, t)
        };
        let best_a = cost_a + Self::dfs(i + 1, t as i8, fb, w, pos, memo);

        let cost_b = if fb < 0 {
            0
        } else {
            Self::manhattan(pos, fb as usize, t)
        };
        let best_b = cost_b + Self::dfs(i + 1, fa, t as i8, w, pos, memo);

        let ans = best_a.min(best_b);
        memo.insert(key, ans);
        ans
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(Solution::minimum_distance("CAKE".into()), 3);
    }

    #[test]
    fn example_2() {
        assert_eq!(Solution::minimum_distance("HAPPY".into()), 6);
    }
}
