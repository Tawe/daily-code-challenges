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

type SmallestInfiniteSet struct {
	next int
	h    IntHeap
	inH  map[int]bool
}


func Constructor() SmallestInfiniteSet {
	s := SmallestInfiniteSet{
		next: 1,
		h:    IntHeap{},
		inH:  make(map[int]bool),
	}
	heap.Init(&s.h)
	return s
}


func (this *SmallestInfiniteSet) PopSmallest() int {
	if this.h.Len() > 0 {
		x := heap.Pop(&this.h).(int)
		delete(this.inH, x)
		return x
	}
	x := this.next
	this.next++
	return x
}


func (this *SmallestInfiniteSet) AddBack(num int)  {
	if num >= this.next {
		return
	}
	if this.inH[num] {
		return
	}
	heap.Push(&this.h, num)
	this.inH[num] = true
}


func main() {
	obj := Constructor()
	obj.AddBack(2)
	fmt.Println(obj.PopSmallest())
	fmt.Println(obj.PopSmallest())
	fmt.Println(obj.PopSmallest())
	obj.AddBack(1)
	fmt.Println(obj.PopSmallest())
	fmt.Println(obj.PopSmallest())
	fmt.Println(obj.PopSmallest())
}