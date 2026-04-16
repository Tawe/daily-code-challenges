use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn solve_queries(nums: Vec<i32>, queries: Vec<i32>) -> Vec<i32> {
        let n = nums.len() as i32;
        let mut positions: HashMap<i32, Vec<i32>> = HashMap::new();

        for (i, &num) in nums.iter().enumerate() {
            positions.entry(num).or_default().push(i as i32);
        }

        queries
            .into_iter()
            .map(|query| {
                let indices = &positions[&nums[query as usize]];
                if indices.len() == 1 {
                    return -1;
                }

                let pos = indices.binary_search(&query).unwrap();
                let prev = indices[(pos + indices.len() - 1) % indices.len()];
                let next = indices[(pos + 1) % indices.len()];

                let prev_diff = (query - prev).abs();
                let next_diff = (next - query).abs();

                let prev_dist = prev_diff.min(n - prev_diff);
                let next_dist = next_diff.min(n - next_diff);

                prev_dist.min(next_dist)
            })
            .collect()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(
            Solution::solve_queries(vec![1, 3, 1, 4, 1, 3, 2], vec![0, 3, 5]),
            vec![2, -1, 3]
        );
    }

    #[test]
    fn example_2() {
        assert_eq!(
            Solution::solve_queries(vec![1, 2, 3, 4], vec![0, 1, 2, 3]),
            vec![-1, -1, -1, -1]
        );
    }
}