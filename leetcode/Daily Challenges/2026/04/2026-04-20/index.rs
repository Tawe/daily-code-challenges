struct Solution;

impl Solution {
    pub fn max_distance(colors: Vec<i32>) -> i32 {
        let n = colors.len();
        let mut answer = 0_i32;

        for i in 0..n {
            if colors[i] != colors[0] {
                answer = answer.max(i as i32);
            }
        }

        for i in (0..n).rev() {
            if colors[i] != colors[n - 1] {
                answer = answer.max((n - 1 - i) as i32);
            }
        }

        answer
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(Solution::max_distance(vec![1, 1, 1, 6, 1, 1, 1]), 3);
    }

    #[test]
    fn example_2() {
        assert_eq!(Solution::max_distance(vec![1, 8, 3, 8, 3]), 4);
    }

    #[test]
    fn example_3() {
        assert_eq!(Solution::max_distance(vec![0, 1]), 1);
    }
}