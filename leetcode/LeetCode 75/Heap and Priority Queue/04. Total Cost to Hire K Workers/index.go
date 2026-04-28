package main

import (
	"container/heap"
	"fmt"
)

type IntHeap []int

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x interface{}) {
	*h = append(*h, x.(int))
}

func (h *IntHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[:n-1]
	return x
}

func totalCost(costs []int, k int, candidates int) int64 {
	n := len(costs)
	leftH := IntHeap{}
	rightH := IntHeap{}
	heap.Init(&leftH)
	heap.Init(&rightH)

	l, r := 0, n-1
	for l <= r && leftH.Len() < candidates {
		heap.Push(&leftH, costs[l])
		l++
	}
	for l <= r && rightH.Len() < candidates {
		heap.Push(&rightH, costs[r])
		r--
	}

	total := int64(0)
	for i := 0; i < k; i++ {
		if rightH.Len() == 0 || (leftH.Len() > 0 && leftH[0] <= rightH[0]) {
			total += int64(heap.Pop(&leftH).(int))
			if l <= r {
				heap.Push(&leftH, costs[l])
				l++
			}
		} else {
			total += int64(heap.Pop(&rightH).(int))
			if l <= r {
				heap.Push(&rightH, costs[r])
				r--
			}
		}
	}

	return total
}

func main() {
	fmt.Println(totalCost([]int{17, 12, 10, 2, 7, 2, 11, 20, 8}, 3, 4)) // 11
	fmt.Println(totalCost([]int{1, 2, 4, 1}, 3, 3))                      // 4
}