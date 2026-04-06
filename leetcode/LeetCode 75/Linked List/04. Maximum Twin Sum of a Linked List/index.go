package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func pairSum(head *ListNode) int {
	slow, fast := head, head
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}

	// Reverse second half starting at slow.
	var prev *ListNode
	curr := slow
	for curr != nil {
		next := curr.Next
		curr.Next = prev
		prev = curr
		curr = next
	}

	best := 0
	first, second := head, prev
	for second != nil {
		best = max(best, first.Val+second.Val)
		first = first.Next
		second = second.Next
	}
	return best
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	fmt.Println(pairSum(&ListNode{5, &ListNode{4, &ListNode{2, &ListNode{1, nil}}}}))
}