# 2026-02-24

## Instructions
You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

The test cases are generated so that the answer fits in a 32-bits integer.

```
Example 1:
Input: root = [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

Example 2:
Input: root = [0]
Output: 0
```

Constraints:

The number of nodes in the tree is in the range [1, 1000].
Node.val is 0 or 1.

## My Thoughts

I treated each root-to-leaf path as a binary number built one bit at a time during DFS.

- Start DFS from the root with `current = 0`
- At each node, shift left and append the node bit:
  - `current = (current << 1) | node->val`
- If the node is a leaf, add `current` to the total sum
- Otherwise, continue DFS into left and right children

This avoids storing full paths and computes each path value incrementally as we traverse.

Time complexity is `O(n)` because each node is visited once.  
Space complexity is `O(h)` for recursion depth, where `h` is the tree height.

## What I Learned

- Root-to-leaf binary path problems map cleanly to a running value with `shift + OR`.
- A DFS with an accumulator is cleaner than collecting path strings and converting later.
- Leaf detection (`left == null && right == null`) is the key moment to commit a path value.
