struct Solution;

impl Solution {
    pub fn xor_after_queries(mut nums: Vec<i32>, queries: Vec<Vec<i32>>) -> i32 {
        const MOD: i64 = 1_000_000_007;

        for q in queries {
            let li = q[0] as usize;
            let ri = q[1] as usize;
            let ki = q[2] as usize;
            let vi = q[3] as i64;

            let mut idx = li;
            while idx <= ri {
                nums[idx] = ((nums[idx] as i64 * vi) % MOD) as i32;
                idx += ki;
            }
        }

        nums.into_iter().fold(0, |acc, x| acc ^ x)
    }
}

fn main() {
    let nums = vec![2, 3, 1, 5, 4];
    let queries = vec![vec![1, 4, 2, 3], vec![0, 2, 1, 2]];
    let result = Solution::xor_after_queries(nums, queries);
    println!("{}", result);
}