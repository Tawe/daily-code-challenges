use std::collections::HashMap;

struct Solution;


impl Solution {
    pub fn minimum_distance(nums: Vec<i32>) -> i32 {
        let mut positions: HashMap<i32, Vec<i32>> = HashMap::new();
        for (i, &num) in nums.iter().enumerate() {
            positions.entry(num).or_default().push(i as i32);
        }

        let mut best = i32::MAX;

        for idxs in positions.values() {
            if idxs.len() < 3 {
                continue;
            }
            for w in idxs.windows(3) {
                let dist = 2 * (w[2] - w[0]);
                best = best.min(dist);
            }
        }

        if best == i32::MAX { -1 } else { best }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(Solution::minimum_distance(vec![1, 2, 1, 1, 3]), 6);
    }

    #[test]
    fn example_2() {
        assert_eq!(Solution::minimum_distance(vec![1, 1, 2, 3, 2, 1, 2]), 8);
    }

    #[test]
    fn example_3() {
        assert_eq!(Solution::minimum_distance(vec![1]), -1);
    }
}