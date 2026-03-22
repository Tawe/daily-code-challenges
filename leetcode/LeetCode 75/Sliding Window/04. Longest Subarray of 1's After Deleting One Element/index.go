package main

import "fmt"

func longestSubarray(nums []int) int {
	left, zeros, best := 0, 0, 0
	for right := 0; right < len(nums); right++ {
		if nums[right] == 0 {
			zeros++
		}
		for zeros > 1 {
			if nums[left] == 0 {
				zeros--
			}
			left++
		}
		win := right - left + 1
		best = max(best, win-1)
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
	fmt.Println(longestSubarray([]int{1,1,0,1}))
	fmt.Println(longestSubarray([]int{0,1,1,1,0,1,1,0,1}))
	fmt.Println(longestSubarray([]int{1,1,1}))
}	
