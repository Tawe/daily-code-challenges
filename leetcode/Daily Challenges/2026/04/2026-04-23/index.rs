use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn distance(nums: Vec<i32>) -> Vec<i64> {
        let n = nums.len();
        let mut result = vec![0_i64; n];
        let mut groups: HashMap<i32, Vec<usize>> = HashMap::new();

        for (i, &num) in nums.iter().enumerate() {
            groups.entry(num).or_default().push(i);
        }

        for indices in groups.values() {
            let k = indices.len();
            if k == 1 {
                continue;
            }

            let mut prefix = vec![0_i64; k + 1];
            for i in 0..k {
                prefix[i + 1] = prefix[i] + indices[i] as i64;
            }

            for i in 0..k {
                let idx = indices[i] as i64;
                let left = idx * i as i64 - prefix[i];
                let right = (prefix[k] - prefix[i + 1]) - idx * (k - i - 1) as i64;
                result[indices[i]] = left + right;
            }
        }

        result
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(Solution::distance(vec![1, 3, 1, 1, 2]), vec![5, 0, 3, 4, 0]);
    }

    #[test]
    fn example_2() {
        assert_eq!(Solution::distance(vec![0, 5, 3]), vec![0, 0, 0]);
    }
}