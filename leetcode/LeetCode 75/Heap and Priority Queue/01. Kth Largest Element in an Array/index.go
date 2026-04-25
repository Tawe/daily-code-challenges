package main

import (
	"container/heap"
)

type IntHeap []int
func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] > h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *IntHeap) Push(x interface{}) { *h = append(*h, x.(int)) }
func (h *IntHeap) Pop() interface{} { old := *h; n := len(old); x := old[n-1]; *h = old[0 : n-1]; return x }

func findKthLargest(nums []int, k int) int {
	h := IntHeap(nums)
	heap.Init(&h)

	for i := 1; i < k; i++ {
		heap.Pop(&h)
	}

	return heap.Pop(&h).(int)
}

func main() {
	fmt.Println(findKthLargest([]int{3,2,1,5,6,4}, 2))
	fmt.Println(findKthLargest([]int{3,2,3,1,2,4,5,5,6}, 4))
}