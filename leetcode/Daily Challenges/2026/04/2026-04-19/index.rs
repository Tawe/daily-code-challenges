struct Solution;

impl Solution {
    pub fn max_distance(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        let n1 = nums1.len();
        let n2 = nums2.len();
        let mut best = 0i32;

        for i in 0..n1 {
            if i >= n2 {
                break;
            }
            let mut lo = i;
            let mut hi = n2 - 1;
            let mut rightmost = None;
            while lo <= hi {
                let mid = lo + (hi - lo) / 2;
                if nums2[mid] >= nums1[i] {
                    rightmost = Some(mid);
                    lo = mid + 1;
                } else if mid == 0 {
                    break;
                } else {
                    hi = mid - 1;
                }
            }
            if let Some(j) = rightmost {
                best = best.max(j as i32 - i as i32);
            }
        }

        best
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(
            Solution::max_distance(vec![55, 30, 5, 4, 2], vec![100, 20, 10, 10, 5]),
            2
        );
    }

    #[test]
    fn example_2() {
        assert_eq!(
            Solution::max_distance(vec![2, 2, 2], vec![10, 10, 1]),
            1
        );
    }

    #[test]
    fn example_3() {
        assert_eq!(
            Solution::max_distance(vec![30, 29, 19, 5], vec![25, 25, 25, 25, 25]),
            2
        );
    }
}
