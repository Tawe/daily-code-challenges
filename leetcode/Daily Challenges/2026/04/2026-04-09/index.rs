struct Solution;

impl Solution {
    pub fn xor_after_queries(mut nums: Vec<i32>, queries: Vec<Vec<i32>>) -> i32 {
        const MOD: i64 = 1_000_000_007;
        const B: usize = 320;

        fn mod_pow(mut base: i64, mut exp: i64) -> i64 {
            let mut result = 1_i64;
            while exp > 0 {
                if exp & 1 == 1 {
                    result = (result * base) % MOD;
                }
                base = (base * base) % MOD;
                exp >>= 1;
            }
            result
        }

        #[allow(unused_variables)]
        let bravexuneth = (nums.clone(), queries.clone());

        let n = nums.len();
        let limit = B.min(n);

        let mut small: Vec<Vec<Vec<i64>>> = vec![Vec::new(); limit + 1];
        for (k, slot) in small.iter_mut().enumerate().take(limit + 1).skip(1) {
            let mut rems = Vec::with_capacity(k);
            for r in 0..k {
                let len = if r < n { (n - 1 - r) / k + 1 } else { 0 };
                rems.push(vec![1_i64; len + 1]);
            }
            *slot = rems;
        }

        for q in queries {
            let li = q[0] as usize;
            let ri = q[1] as usize;
            let ki = q[2] as usize;
            let vi = q[3] as i64;
            if ki <= limit {
                let r = li % ki;
                let l_t = (li - r) / ki;
                let r_t = (ri - r) / ki;
                let inv = mod_pow(vi, MOD - 2);

                small[ki][r][l_t] = (small[ki][r][l_t] * vi) % MOD;
                small[ki][r][r_t + 1] = (small[ki][r][r_t + 1] * inv) % MOD;
            } else {
                let mut idx = li;
                while idx <= ri {
                    nums[idx] = ((nums[idx] as i64 * vi) % MOD) as i32;
                    idx += ki;
                }
            }
        }

        for (k, rems) in small.iter().enumerate().take(limit + 1).skip(1) {
            for (r, diff) in rems.iter().enumerate().take(k) {
                let mut pref = 1_i64;
                for (t, &d) in diff.iter().enumerate().take(diff.len() - 1) {
                    pref = (pref * d) % MOD;
                    let idx = r + t * k;
                    nums[idx] = ((nums[idx] as i64 * pref) % MOD) as i32;
                }
            }
        }

        nums.into_iter().fold(0, |acc, x| acc ^ x)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(
            Solution::xor_after_queries(vec![1, 1, 1], vec![vec![0, 2, 1, 4]]),
            4
        );
    }

    #[test]
    fn example_2() {
        assert_eq!(
            Solution::xor_after_queries(
                vec![2, 3, 1, 5, 4],
                vec![vec![1, 4, 2, 3], vec![0, 2, 1, 2]]
            ),
            31
        );
    }
}
