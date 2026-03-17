package main

import "fmt"

func maxArea(height []int) int {
	maxWater := 0
	left, right := 0, len(height)-1
	for left < right {
		width := right - left
		h := min(height[left], height[right])
		maxWater = max(maxWater, width*h)
		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}
	return maxWater
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	fmt.Println(maxArea([]int{1, 8, 6, 2, 5, 4, 8, 3, 7}))
}