# 2025-12-22

## Instructions


You are given an array of n strings strs, all of the same length.

We may choose any deletion indices, and we delete all the characters in those indices for each string.

For example, if we have strs = ["abcdef","uvwxyz"] and deletion indices {0, 2, 3}, then the final array after deletions is ["bef", "vyz"].

Suppose we chose a set of deletion indices answer such that after deletions, the final array has every string (row) in lexicographic order. (i.e., (strs[0][0] <= strs[0][1] <= ... <= strs[0][strs[0].length - 1]), and (strs[1][0] <= strs[1][1] <= ... <= strs[1][strs[1].length - 1]), and so on). Return the minimum possible value of answer.length.

```
Example 1:
Input: strs = ["babca","bbazb"]
Output: 3
Explanation: After deleting columns 0, 1, and 4, the final array is strs = ["bc", "az"].
Both these rows are individually in lexicographic order (ie. strs[0][0] <= strs[0][1] and strs[1][0] <= strs[1][1]).
Note that strs[0] > strs[1] - the array strs is not necessarily in lexicographic order.

Example 2:
Input: strs = ["edcba"]
Output: 4
Explanation: If we delete less than 4 columns, the only row will not be lexicographically sorted.

Example 3:
Input: strs = ["ghi","def","abc"]
Output: 0
Explanation: All rows are already lexicographically sorted.
 ```

Constraints:

n == strs.length
1 <= n <= 100
1 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

## My Thoughts

At first glance, this problem looked very similar to earlier “delete columns” challenges, which made it easy to misread what was actually being asked. The key difference here is that rows do not need to be lexicographically ordered relative to each other, instead, each individual row must be sorted left to right after deletions.
That subtle wording change completely alters the solution.
My initial instinct was to think in terms of removing “bad” columns greedily, but that approach breaks down quickly because deleting a column helps one row but might hurt another. What really matters is which columns we keep, not which ones we delete.
Once I reframed the problem as:
> “What is the largest set of columns I can keep such that every row is non-decreasing?”
the solution became much clearer.
This naturally leads to a dynamic programming perspective, similar to a longest increasing (or non-decreasing) subsequence, except the comparison has to hold across all rows simultaneously.
By treating each column as a node and allowing a transition from column i to column j only if every row satisfies strs[r][i] ≤ strs[r][j], the problem becomes finding the longest valid chain of columns. The minimum number of deletions is simply the total number of columns minus the length of that chain.

## What I Learned

- Careful reading matters: this problem looks almost identical to other column-deletion problems, but the ordering requirement applies per row, not across rows.
- Think in terms of what you keep, not what you delete, it often simplifies reasoning.
- This is effectively a longest valid subsequence problem, not a greedy filtering problem.
- Dynamic programming is a strong fit when:
    - choices depend on previous choices
    - and a local decision can affect future validity.
- Even with multiple constraints (one per row), a DP solution can still be efficient when input sizes are small and checks are cheap.
