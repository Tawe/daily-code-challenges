package main

import "fmt"

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func leafSimilar(root1 *TreeNode, root2 *TreeNode) bool {
	leaves1 := []int{}
	leaves2 := []int{}
	dfs(root1, &leaves1)
	dfs(root2, &leaves2)
	return slices.Equal(leaves1, leaves2)
 }

 func dfs(node *TreeNode, leaves *[]int) {
	if node == nil {
		return
	}
	if node.Left == nil && node.Right == nil {
		*leaves = append(*leaves, node.Val)
	}
	dfs(node.Left, leaves)
	dfs(node.Right, leaves)
 }
 
 func main() {
    root1 := &TreeNode{Val: 1, Left: &TreeNode{Val: 2}, Right: &TreeNode{Val: 3}}
    root2 := &TreeNode{Val: 1, Left: &TreeNode{Val: 3}, Right: &TreeNode{Val: 2}}
    fmt.Println(leafSimilar(root1, root2))
 }