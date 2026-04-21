# 2026-04-21

## Instructions
You are given two integer arrays, `source` and `target`, both of length `n`. You are also given an array `allowedSwaps` where each `allowedSwaps[i] = [ai, bi]` indicates that you are allowed to swap the elements at index `ai` and index `bi` **(0-indexed)** of array `source`. Note that you can swap elements at a specific pair of indices **multiple** times and in **any** order.

The **Hamming distance** of two arrays of the same length, `source` and `target`, is the number of positions where the elements are different. Formally, it is the number of indices `i` for `0 <= i <= n-1` where `source[i] != target[i]` **(0-indexed)**.

Return _the **minimum Hamming distance** of_ `source` _and_ `target` _after performing **any** amount of swap operations on array_ `source`_._

**Example 1:**
**Input:** source = [1,2,3,4], target = [2,1,4,5], allowedSwaps = [[0,1],[2,3]]
**Output:** 1
**Explanation:** source can be transformed the following way:
- Swap indices 0 and 1: source = [2,1,3,4]
- Swap indices 2 and 3: source = [2,1,4,3]
The Hamming distance of source and target is 1 as they differ in 1 position: index 3.

**Example 2:**
**Input:** source = [1,2,3,4], target = [1,3,2,4], allowedSwaps = []
**Output:** 2
**Explanation:** There are no allowed swaps.
The Hamming distance of source and target is 2 as they differ in 2 positions: index 1 and index 2.

**Example 3:**
**Input:** source = [5,1,2,4,3], target = [1,5,4,2,3], allowedSwaps = [[0,4],[4,2],[1,3],[1,4]]
**Output:** 0

**Constraints:**
- `n == source.length == target.length`
- `1 <= n <= 105`
- `1 <= source[i], target[i] <= 105`
- `0 <= allowedSwaps.length <= 105`
- `allowedSwaps[i].length == 2`
- `0 <= ai, bi <= n - 1`
- `ai != bi`

## My Thoughts

The key observation here is that the allowed swaps partition the indices into connected components. Inside one component, I can reorder the `source` values however I want, but I cannot move values across components. So the problem becomes: for each component, how many values from `source` can be matched against the values needed by `target` in that same component?

The Rust solution uses a DSU to build those connected groups. After unioning all allowed swaps, it counts the frequency of each `source` value inside each component root. Then it scans through `target`: for each index, it looks at that index's component and tries to consume one matching value from the component's frequency map.

If a matching value is available, that position can be fixed by reordering within the component. If not, it contributes to the final Hamming distance. In other words, the answer is just the number of unmatched target values after all possible in-component matches are canceled out.

### Complexity

- Time: `O((n + m) * alpha(n))` on average, plus hash map work for counting
- Space: `O(n)`

## What I Learned

This challenge reinforced a very useful DSU pattern: when swaps are allowed along edges, the real structure is the connected components, because each component acts like a freely permutable bucket.

It also highlighted a clean way to minimize mismatches: instead of trying to explicitly rearrange the arrays, just count how many needed values can be satisfied inside each component and treat everything left over as unavoidable distance.
