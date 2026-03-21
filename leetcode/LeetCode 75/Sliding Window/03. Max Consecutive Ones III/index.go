package main

import "fmt"

func longestOnes(nums []int, k int) int {
    left := 0
    right := 0
    maxLength := 0
    zeroCount := 0

    for right < len(nums) {
        if nums[right] == 0 {
            zeroCount++
        }

        for zeroCount > k {
            if nums[left] == 0 {
                zeroCount--
            }
            left++
        }

        maxLength = max(maxLength, right - left + 1)
        right++
    }

    return maxLength
}

func main() {
	fmt.Println(longestOnes([]int{1,1,1,0,0,0,1,1,1,1,0}, 2))
	fmt.Println(longestOnes([]int{0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1}, 3))
}