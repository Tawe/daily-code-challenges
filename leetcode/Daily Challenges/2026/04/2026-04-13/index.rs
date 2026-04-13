struct Solution;

impl Solution {
    pub fn get_min_distance(nums: Vec<i32>, target: i32, start: i32) -> i32 {
        let mut min_distance = i32::MAX;
        for (i, &num) in nums.iter().enumerate() {
            if num == target {
                min_distance = min_distance.min((i as i32 - start as i32).abs());
            }
        }
        min_distance
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(Solution::get_min_distance(vec![1, 2, 3, 4, 5], 5, 3), 1);
    }
}