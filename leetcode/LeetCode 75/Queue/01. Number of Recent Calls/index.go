package main

import "fmt"

type RecentCounter struct {
	requests []int
}

func Constructor() RecentCounter {
	return RecentCounter{requests: make([]int, 0)}
}

func (this *RecentCounter) Ping(t int) int {
	this.requests = append(this.requests, t)
	low := t - 3000
	for len(this.requests) > 0 && this.requests[0] < low {
		this.requests = this.requests[1:]
	}
	return len(this.requests)
}

func main() {
	recentCounter := Constructor()
	fmt.Println(recentCounter.Ping(1))
	fmt.Println(recentCounter.Ping(100))
	fmt.Println(recentCounter.Ping(3001))
	fmt.Println(recentCounter.Ping(3002))
}
