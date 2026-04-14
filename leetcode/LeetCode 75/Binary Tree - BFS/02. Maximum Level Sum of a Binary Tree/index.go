package main

import "fmt"

type TreeNode struct {
	Val int
	Left *TreeNode
	Right *TreeNode
}

func maxLevelSum(root *TreeNode) int {
	queue := []*TreeNode{root}
	level := 1
	bestLevel := 1
	bestSum := root.Val

	for len(queue) > 0 {
		levelSize := len(queue)
		levelSum := 0

		for i := 0; i < levelSize; i++ {
			node := queue[0]
			queue = queue[1:]
			levelSum += node.Val

			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}

		if levelSum > bestSum {
			bestSum = levelSum
			bestLevel = level
		}
		level++
	}

	return bestLevel
}

func main() {
	root := &TreeNode{Val: 1, Left: &TreeNode{Val: 7, Left: &TreeNode{Val: 7}, Right: &TreeNode{Val: -8}}, Right: &TreeNode{Val: 0}}
	fmt.Println(maxLevelSum(root))
}