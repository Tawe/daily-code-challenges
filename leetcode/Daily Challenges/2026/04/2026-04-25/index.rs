struct Solution;

impl Solution {
    pub fn max_distance(side: i32, points: Vec<Vec<i32>>, k: i32) -> i32 {
        let side = side as i64;
        let k = k as usize;
        let perimeter = 4 * side;

        let mut pos: Vec<i64> = points
            .iter()
            .map(|p| Self::to_perimeter_pos(side, p[0] as i64, p[1] as i64))
            .collect();
        pos.sort_unstable();

        let n = pos.len();
        let mut doubled = Vec::with_capacity(2 * n);
        doubled.extend(pos.iter().copied());
        doubled.extend(pos.iter().map(|&x| x + perimeter));

        let mut lo = 0_i64;
        let mut hi = 2 * side;
        let mut ans = 0_i64;

        while lo <= hi {
            let mid = lo + (hi - lo) / 2;
            if Self::can_pick(mid, k, perimeter, &doubled, n) {
                ans = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        ans as i32
    }

    fn to_perimeter_pos(side: i64, x: i64, y: i64) -> i64 {
        if y == 0 {
            x
        } else if x == side {
            side + y
        } else if y == side {
            3 * side - x
        } else {
            4 * side - y
        }
    }

    fn lower_bound(arr: &[i64], mut left: usize, mut right: usize, target: i64) -> usize {
        while left < right {
            let mid = left + (right - left) / 2;
            if arr[mid] < target {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        left
    }

    fn can_pick(d: i64, k: usize, perimeter: i64, doubled: &[i64], n: usize) -> bool {
        if k <= 1 {
            return true;
        }

        for start in 0..n {
            let first = doubled[start];
            let mut last = first;
            let mut count = 1usize;
            let mut idx = start + 1;
            let limit = start + n;

            while count < k {
                let next_target = last + d;
                idx = Self::lower_bound(doubled, idx, limit, next_target);
                if idx >= limit {
                    break;
                }
                last = doubled[idx];
                count += 1;
                idx += 1;
            }

            if count == k && (last - first) <= (perimeter - d) {
                return true;
            }
        }

        false
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(
            Solution::max_distance(2, vec![vec![0, 2], vec![2, 0], vec![2, 2], vec![0, 0]], 4),
            2
        );
    }

    #[test]
    fn example_2() {
        assert_eq!(
            Solution::max_distance(
                2,
                vec![vec![0, 0], vec![1, 2], vec![2, 0], vec![2, 2], vec![2, 1]],
                4
            ),
            1
        );
    }

    #[test]
    fn example_3() {
        assert_eq!(
            Solution::max_distance(
                2,
                vec![
                    vec![0, 0],
                    vec![0, 1],
                    vec![0, 2],
                    vec![1, 2],
                    vec![2, 0],
                    vec![2, 2],
                    vec![2, 1]
                ],
                5
            ),
            1
        );
    }
}