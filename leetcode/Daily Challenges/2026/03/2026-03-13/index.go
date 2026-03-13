package main

import (
	"fmt"
	"math"
)

func minNumberOfSeconds(mountainHeight int, workerTimes []int) int64 {
	h := int64(mountainHeight)

	minW := int64(workerTimes[0])
	for _, w := range workerTimes[1:] {
		if int64(w) < minW {
			minW = int64(w)
		}
	}
	hi := minW * h * (h + 1) / 2
	lo := int64(0)

	canFinish := func(T int64) bool {
		remaining := h
		for _, w := range workerTimes {
			remaining -= maxX(T, int64(w))
			if remaining <= 0 {
				return true
			}
		}
		return false
	}

	for lo < hi {
		mid := (lo + hi) / 2
		if canFinish(mid) {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}

func maxX(T, w int64) int64 {
	if T < w {
		return 0
	}
	t := float64(T / w)
	disc := 1 + 8*t
	x := int64((math.Sqrt(disc) - 1) / 2)

	for w*x*(x+1)/2 > T {
		x--
	}
	for w*(x+1)*(x+2)/2 <= T {
		x++
	}
	return x
}

func main() {
	fmt.Println(minNumberOfSeconds(4, []int{2, 1, 1}))   // 3
	fmt.Println(minNumberOfSeconds(10, []int{3, 2, 2, 4})) // 12
	fmt.Println(minNumberOfSeconds(5, []int{1}))         // 15
}