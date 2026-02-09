# 2026-02-08

## Instructions
Given a binary tree, determine if it is height-balanced.
```
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true
```

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104

## My Thoughts

At first glance, checking whether a tree is height-balanced feels like a simple comparison problem, but it quickly becomes clear that naïvely calculating heights repeatedly would be inefficient. The key challenge is that balance depends on every subtree, not just the root. That means a top-down approach risks recalculating heights many times and blowing up the time complexity.

What helped here was reframing the problem as a post-order traversal where each recursive call returns useful information upward. Instead of separately checking balance and height, both can be handled in one pass.


## What I Learned
	•	Early termination is powerful: Returning a sentinel value (like -1) to signal failure lets the recursion stop immediately once an imbalance is detected.
	•	Bottom-up recursion beats top-down checks: Computing subtree heights as you return from recursion avoids repeated work and keeps the solution O(n).
	•	Balance is a local rule with global consequences: Even if the root looks balanced, a deep subtree can invalidate the whole tree.
	•	Helper functions improve clarity: Separating the public isBalanced method from the recursive height logic made the intent of the code much clearer.
	•	PHP recursion is totally viable for tree problems when the depth is reasonable (and this problem’s constraints make it safe).