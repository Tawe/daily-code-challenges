package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func longestZigZag(root *TreeNode) int {
	ans := 0
	var dfs func(*TreeNode, int, int)
	dfs = func(node *TreeNode, l, r int) {
		if node == nil {
			return
		}
		ans = max(ans, max(l, r))
		dfs(node.Left, r+1, 0)
		dfs(node.Right, 0, l+1)
	}
	dfs(root, 0, 0)
	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	fmt.Println(longestZigZag(&TreeNode{Val: 1}))
}
