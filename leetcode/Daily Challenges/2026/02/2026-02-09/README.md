# 2026-02-09

## Instructions
Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.

A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.
```
Example 1:
Input: root = [1,null,2,null,3,null,4,null,null]
Output: [2,1,3,null,null,null,4]
Explanation: This is not the only correct answer, [3,1,4,null,2] is also correct.

Example 2:
Input: root = [2,1,3]
Output: [2,1,3]
```

Constraints:

The number of nodes in the tree is in the range [1, 104].
1 <= Node.val <= 105

## My Thoughts

This problem felt like a “BST trick” problem: I don’t actually need to rebalance by doing rotations or anything fancy. Because it’s a BST, an inorder traversal gives me the values in sorted order automatically. Once I have a sorted list, building a balanced BST is basically the same as building a balanced binary search tree from a sorted array—pick the middle as root, recurse left and right.

## What I Learned
	•	Inorder traversal of a BST produces a sorted list of values.
	•	Rebuilding a balanced BST can be done by repeatedly choosing the middle element as the root.
	•	This guarantees the height difference stays ≤ 1 because both sides stay as even as possible.
	•	The solution is efficient: O(n) time (visit each node once + rebuild once) and O(n) space (the array).
	•	Sometimes “balancing a tree” doesn’t mean rotations—if the problem allows it, rebuild from sorted order is the simplest path.