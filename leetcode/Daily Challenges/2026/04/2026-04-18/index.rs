struct Solution;
impl Solution {
    pub fn mirror_distance(n: i32) -> i32 {
        let my_str: String = format!("{:?}", n);
        let reversed_str = my_str.chars().rev().collect::<String>();
        let reverse_num = reversed_str.parse::<i32>().unwrap();
        (n - reverse_num).abs()
    }
}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(Solution::mirror_distance(12), 1);
    }
}