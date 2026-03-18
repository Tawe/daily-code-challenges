package main

import (
	"fmt"
	"sort"
)

func maxOperations(nums []int, k int) int {
	sort.Ints(nums)

    left := 0
    right := len(nums) - 1
    count := 0
    for left < right {
        if nums[left] + nums[right] == k {
            count++
            left++
            right--
		} else if nums[left] + nums[right] < k {
			left++
		} else {
			right--
		}
    }
    return count
}

func main() {
	fmt.Println(maxOperations([]int{1,2,3,4}, 5))
	fmt.Println(maxOperations([]int{3,1,3,4,3}, 6))
	fmt.Println(maxOperations([]int{4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4}, 2))
}

