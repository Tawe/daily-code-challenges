package main

import "fmt"

func moveZeroes(nums []int) {
	write := 0

	for read := 0; read < len(nums); read++ {
		if nums[read] != 0 {
			nums[write] = nums[read]
			write++
		}
	}

	for write < len(nums) {
		nums[write] = 0
		write++
	}
}

func main() {
	nums := []int{0,1,0,3,12}
	moveZeroes(nums)
	fmt.Println(nums)
}