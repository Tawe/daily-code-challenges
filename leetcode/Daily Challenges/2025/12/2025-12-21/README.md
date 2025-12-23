 2025-12-21

## Instructions
You are given an array of n strings strs, all of the same length.

We may choose any deletion indices, and we delete all the characters in those indices for each string.

For example, if we have strs = ["abcdef","uvwxyz"] and deletion indices {0, 2, 3}, then the final array after deletions is ["bef", "vyz"].

Suppose we chose a set of deletion indices answer such that after deletions, the final array has its elements in lexicographic order (i.e., strs[0] <= strs[1] <= strs[2] <= ... <= strs[n - 1]). Return the minimum possible value of answer.length.

```yaml
Example 1:
Input: strs = ["ca","bb","ac"]
Output: 1
Explanation: 
After deleting the first column, strs = ["a", "b", "c"].
Now strs is in lexicographic order (ie. strs[0] <= strs[1] <= strs[2]).
We require at least 1 deletion since initially strs was not in lexicographic order, so the answer is 1.

Example 2:
Input: strs = ["xc","yb","za"]
Output: 0
Explanation: 
strs is already in lexicographic order, so we do not need to delete anything.
Note that the rows of strs are not necessarily in lexicographic order:
i.e., it is NOT necessarily true that (strs[0][0] <= strs[0][1] <= ...)

Example 3:
Input: strs = ["zyx","wvu","tsr"]
Output: 3
Explanation: We have to delete every column.
 ```

Constraints:

n == strs.length
1 <= n <= 100
1 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

## My Thoughts

At first, this problem felt similar to earlier “delete unsorted columns” challenges, which made it tempting to simply check each column independently and delete the ones that looked problematic. However, the examples showed that deleting one column can affect how later columns matter, which meant a purely local decision wouldn’t always be correct.

The key shift was realizing that lexicographic order is determined left to right. Once two rows are already ordered by a previous column, later columns no longer matter for that pair. That insight changed the problem from “check each column in isolation” to “track which row comparisons are already resolved.”

With that perspective, a greedy approach made sense: process columns from left to right, delete a column only if keeping it would break the order for any unresolved pair, and otherwise use it to lock in ordering where possible.

## What I Learned
- Lexicographic ordering depends on the first position where strings differ.
- Greedy strategies can be correct when decisions permanently reduce future constraints.
- Tracking state (which row pairs are already ordered) is often the missing piece in problems that seem deceptively simple.
- A column that looks “bad” for some rows may be irrelevant if those rows are already ordered.
- Thinking in terms of what information a decision gives you (not just what it removes) leads to better solutions.
- Problems that look similar on the surface can have very different optimal strategies once constraints are considered.