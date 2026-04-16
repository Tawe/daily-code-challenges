package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func deleteNode(root *TreeNode, key int) *TreeNode {
	if root == nil {
		return nil
	}

	if key < root.Val {
		root.Left = deleteNode(root.Left, key)
		return root
	}

	if key > root.Val {
		root.Right = deleteNode(root.Right, key)
		return root
	}

	if root.Left == nil {
		return root.Right
	}

	if root.Right == nil {
		return root.Left
	}

	successor := root.Right
	for successor.Left != nil {
		successor = successor.Left
	}

	root.Val = successor.Val
	root.Right = deleteNode(root.Right, successor.Val)
	return root
}

func main() {
	root := &TreeNode{
		Val: 5,
		Left: &TreeNode{
			Val:  3,
			Left: &TreeNode{Val: 2},
			Right: &TreeNode{
				Val: 4,
			},
		},
		Right: &TreeNode{
			Val:   6,
			Right: &TreeNode{Val: 7},
		},
	}

	fmt.Println(deleteNode(root, 3))
}