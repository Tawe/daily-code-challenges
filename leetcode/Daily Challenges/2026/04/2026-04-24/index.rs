struct Solution;

impl Solution {
    pub fn furthest_distance_from_origin(moves: String) -> i32 {
        let mut left = 0_i32;
        let mut right = 0_i32;
        let mut underscore = 0_i32;
       for c in moves.chars() {
        match c {
            'L' => left += 1,
            'R' => right += 1,
            '_' => underscore += 1,
            _ => {}
        }
       }
       
       (left - right).abs() + underscore
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(Solution::furthest_distance_from_origin("L_RL__R".to_string()), 3);
    }
}