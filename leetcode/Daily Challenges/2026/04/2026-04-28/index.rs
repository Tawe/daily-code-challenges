struct Solution;

impl Solution {
    pub fn min_operations(grid: Vec<Vec<i32>>, x: i32) -> i32 {
        let mut vals: Vec<i32> = grid.into_iter().flatten().collect();
        let base_mod = vals[0] % x;

        for &v in vals.iter() {
            if v % x != base_mod {
                return -1;
            }
        }

        vals.sort_unstable();
        let target = vals[vals.len() / 2];

        let mut ops: i64 = 0;
        for v in vals {
            ops += ((v - target).abs() / x) as i64;
        }

        ops as i32
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(Solution::min_operations(vec![vec![2, 4], vec![6, 8]], 2), 4);
    }

    #[test]
    fn example_2() {
        assert_eq!(Solution::min_operations(vec![vec![1, 5], vec![2, 3]], 1), 5);
    }

    #[test]
    fn example_3() {
        assert_eq!(Solution::min_operations(vec![vec![1, 2], vec![3, 4]], 2), -1);
    }
}