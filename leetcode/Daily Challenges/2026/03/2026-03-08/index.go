package main

import "fmt"

func findDifferentBinaryString(nums []string) string {
	n := len(nums)
	result := make([]byte, n)
	for i := 0; i < n; i++ {
		if nums[i][i] == '0' {
			result[i] = '1'
		} else {
			result[i] = '0'
		}
	}
	return string(result)
}

func main() {
	fmt.Println(findDifferentBinaryString([]string{"01","10"}))
	fmt.Println(findDifferentBinaryString([]string{"00","01"}))
	fmt.Println(findDifferentBinaryString([]string{"111","011","001"}))
}