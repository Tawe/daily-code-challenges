package main	

import "fmt"

type TreeNode struct {
	Val int
	Left *TreeNode
	Right *TreeNode
 }

 func rightSideView(root *TreeNode) []int {
    if root == nil {
        return []int{}
    }
    queue := []*TreeNode{root}
    result := []int{}
    for len(queue) > 0 {
        levelSize := len(queue)
        for i := 0; i < levelSize; i++ {
            node := queue[0]
            queue = queue[1:]
            if i == levelSize - 1 {
                result = append(result, node.Val)
            }
            if node.Left != nil {
                queue = append(queue, node.Left)
            }
            if node.Right != nil {
                queue = append(queue, node.Right)
            }
        }
    }
    return result
 }	

 func main() {
    root := &TreeNode{Val: 1, Left: &TreeNode{Val: 2, Right: &TreeNode{Val: 5}}, Right: &TreeNode{Val: 3, Right: &TreeNode{Val: 4}}}
    fmt.Println(rightSideView(root))
 }
 