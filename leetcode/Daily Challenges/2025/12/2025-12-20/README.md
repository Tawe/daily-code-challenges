 2025-12-19

## Instructions
You are given an array of n strings strs, all of the same length.

The strings can be arranged such that there is one on each line, making a grid.

- For example, strs = ["abc", "bce", "cae"] can be arranged as follows:
```
abc
bce
cae
```

You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted, while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

Return the number of columns that you will delete.

 
```yaml
Example 1:
Input: strs = ["cba","daf","ghi"]
Output: 1
Explanation: The grid looks as follows:
  cba
  daf
  ghi
Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.

Example 2:
Input: strs = ["a","b"]
Output: 0
Explanation: The grid looks as follows:
  a
  b
Column 0 is the only column and is sorted, so you will not delete any columns.

Example 3:
Input: strs = ["zyx","wvu","tsr"]
Output: 3
Explanation: The grid looks as follows:
  zyx
  wvu
  tsr
All 3 columns are not sorted, so you will delete all 3.
 ```

Constraints:

n == strs.length
1 <= n <= 100
1 <= strs[i].length <= 1000
strs[i] consists of lowercase English letters.

## My Thoughts

At first, this problem felt like it might require rearranging strings or sorting data in a more complex way. However, once I visualized the input as a grid of characters, the task became much clearer. Each column is independent, and the only thing that matters is whether the characters in that column are already in non-decreasing order from top to bottom.

Instead of trying to manipulate the strings or rebuild the grid, I focused on scanning column by column and comparing each character with the one directly above it. The moment a character breaks lexicographic order, that column can be marked for deletion and skipped.

This shift from thinking “string problem” to “grid scan problem” simplified both the logic and the implementation.

## What I Learned
- Many string problems become easier when visualized as a 2D grid.
- Independent columns or rows can often be evaluated separately without extra data structures.
- Early exits (breaking as soon as a violation is found) improve clarity and efficiency.
- Sometimes the simplest nested loop is already the optimal solution.
- Understanding what doesn’t need to be changed (no rearranging, no sorting) is just as important as knowing what to check.