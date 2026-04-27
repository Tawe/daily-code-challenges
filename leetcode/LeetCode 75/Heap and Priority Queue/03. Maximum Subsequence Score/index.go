package main

import (
	"container/heap"
	"fmt"
	"sort"
)

type IntHeap []int

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *IntHeap) Push(x interface{}) { *h = append(*h, x.(int)) }
func (h *IntHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[:n-1]
	return x
}

func maxScore(nums1 []int, nums2 []int, k int) int64 {
	n := len(nums1)
	type pair struct {
		n1 int
		n2 int
	}

	pairs := make([]pair, n)
	for i := 0; i < n; i++ {
		pairs[i] = pair{n1: nums1[i], n2: nums2[i]}
	}

	sort.Slice(pairs, func(i, j int) bool {
		return pairs[i].n2 > pairs[j].n2
	})

	minH := IntHeap{}
	heap.Init(&minH)
	sum := int64(0)
	best := int64(0)

	for _, p := range pairs {
		heap.Push(&minH, p.n1)
		sum += int64(p.n1)

		if minH.Len() > k {
			sum -= int64(heap.Pop(&minH).(int))
		}

		if minH.Len() == k {
			score := sum * int64(p.n2)
			if score > best {
				best = score
			}
		}
	}

	return best
}

func main() {
	fmt.Println(maxScore([]int{1, 3, 3, 2}, []int{2, 1, 3, 4}, 3))    // 12
	fmt.Println(maxScore([]int{4, 2, 3, 1, 1}, []int{7, 5, 10, 9, 6}, 1)) // 30
}