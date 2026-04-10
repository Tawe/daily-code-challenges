package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func pathSum(root *TreeNode, targetSum int) int {
	prefixCount := map[int]int{0: 1}
	return dfs(root, 0, targetSum, prefixCount)
}

func dfs(node *TreeNode, runningSum int, targetSum int, prefixCount map[int]int) int {
	if node == nil {
		return 0
	}

	runningSum += node.Val
	need := runningSum - targetSum
	count := prefixCount[need]

	prefixCount[runningSum]++
	count += dfs(node.Left, runningSum, targetSum, prefixCount)
	count += dfs(node.Right, runningSum, targetSum, prefixCount)
	prefixCount[runningSum]--

	return count
}

func main() {
	root := &TreeNode{
		Val: 10,
		Left: &TreeNode{
			Val: 5,
			Left: &TreeNode{
				Val:   3,
				Left:  &TreeNode{Val: 3},
				Right: &TreeNode{Val: -2},
			},
			Right: &TreeNode{
				Val:   2,
				Right: &TreeNode{Val: 1},
			},
		},
		Right: &TreeNode{
			Val:   -3,
			Right: &TreeNode{Val: 11},
		},
	}
	fmt.Println(pathSum(root, 8)) // 3
}