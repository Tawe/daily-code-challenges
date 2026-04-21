use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn minimum_hamming_distance(source: Vec<i32>, target: Vec<i32>, allowed_swaps: Vec<Vec<i32>>) -> i32 {
        let n = source.len();
        let mut dsu = Dsu::new(n);

        for pair in allowed_swaps {
            dsu.union(pair[0] as usize, pair[1] as usize);
        }

        let mut groups: HashMap<usize, HashMap<i32, i32>> = HashMap::new();
        for i in 0..n {
            let root = dsu.find(i);
            *groups
                .entry(root)
                .or_default()
                .entry(source[i])
                .or_insert(0) += 1;
        }

        let mut mismatch = 0;
        for i in 0..n {
            let root = dsu.find(i);
            if let Some(freq) = groups.get_mut(&root) {
                if let Some(count) = freq.get_mut(&target[i]) {
                    if *count > 0 {
                        *count -= 1;
                        continue;
                    }
                }
            }
            mismatch += 1;
        }

        mismatch
    }
}

struct Dsu {
    parent: Vec<usize>,
    rank: Vec<usize>,
}

impl Dsu {
    fn new(n: usize) -> Self {
        Self {
            parent: (0..n).collect(),
            rank: vec![0; n],
        }
    }

    fn find(&mut self, x: usize) -> usize {
        if self.parent[x] != x {
            let p = self.parent[x];
            self.parent[x] = self.find(p);
        }
        self.parent[x]
    }

    fn union(&mut self, a: usize, b: usize) {
        let mut ra = self.find(a);
        let mut rb = self.find(b);
        if ra == rb {
            return;
        }
        if self.rank[ra] < self.rank[rb] {
            std::mem::swap(&mut ra, &mut rb);
        }
        self.parent[rb] = ra;
        if self.rank[ra] == self.rank[rb] {
            self.rank[ra] += 1;
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(Solution::minimum_hamming_distance(vec![1,2,3,4], vec![2,1,4,5], vec![vec![0,1], vec![2,3]]), 1);
    }

    #[test]
    fn example_2() {
        assert_eq!(
            Solution::minimum_hamming_distance(vec![1, 2, 3, 4], vec![1, 3, 2, 4], vec![]),
            2
        );
    }

    #[test]
    fn example_3() {
        assert_eq!(
            Solution::minimum_hamming_distance(
                vec![5, 1, 2, 4, 3],
                vec![1, 5, 4, 2, 3],
                vec![vec![0, 4], vec![4, 2], vec![1, 3], vec![1, 4]]
            ),
            0
        );
    }
}