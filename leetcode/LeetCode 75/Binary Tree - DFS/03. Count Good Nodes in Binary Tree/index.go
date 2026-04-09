package main


import (
	"fmt"
	"math"
)

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func goodNodes(root *TreeNode) int {
	return dfsGood(root, math.MinInt32)
}

func dfsGood(node *TreeNode, maxSoFar int) int {
	if node == nil {
		return 0
	}
	count := 0
	if node.Val >= maxSoFar {
		count = 1
	}
	next := maxSoFar
	if node.Val > next {
		next = node.Val
	}
	count += dfsGood(node.Left, next)
	count += dfsGood(node.Right, next)
	return count
}

func main() {
	root := &TreeNode{Val: 3, Left: &TreeNode{Val: 1, Left: &TreeNode{Val: 3}}, Right: &TreeNode{Val: 4, Left: &TreeNode{Val: 1}, Right: &TreeNode{Val: 5}}}
	fmt.Println(goodNodes(root))
}