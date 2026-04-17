use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn min_mirror_pair_distance(nums: Vec<i32>) -> i32 {
        fn reverse_num(mut x: i32) -> i32 {
            let mut rev = 0;
            while x > 0 {
                rev = rev * 10 + (x % 10);
                x /= 10;
            }
            rev
        }

        let mut last_index_by_reversed_value: HashMap<i32, i32> = HashMap::new();
        let mut best = i32::MAX;

        for (j, &value) in nums.iter().enumerate() {
            let j = j as i32;

            if let Some(&i) = last_index_by_reversed_value.get(&value) {
                best = best.min(j - i);
            }

            let reversed = reverse_num(value);
            last_index_by_reversed_value.insert(reversed, j);
        }

        if best == i32::MAX { -1 } else { best }
    }
}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(Solution::min_mirror_pair_distance(vec![12, 21, 45, 33, 54]), 1);
    }

    #[test]
    fn example_2() {
        assert_eq!(Solution::min_mirror_pair_distance(vec![120, 21]), 1);
    }

    #[test]
    fn example_3() {
        assert_eq!(Solution::min_mirror_pair_distance(vec![21, 120]), -1);
    }
}