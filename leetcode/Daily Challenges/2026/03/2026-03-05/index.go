package main

import "fmt"

func minOperations(s string) int {
	misStartWith0 := 0
	misStartWith1 := 0

	for i := 0; i < len(s); i++ {
		expected0 := byte('0')
		expected1 := byte('1')
		if i%2 == 1 {
			expected0 = '1'
			expected1 = '0'
		}

		if s[i] != expected0 {
			misStartWith0++
		}
		if s[i] != expected1 {
			misStartWith1++
		}
	}

	return min(misStartWith0, misStartWith1)
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func main() {
	fmt.Println(minOperations("0100")) // 1
	fmt.Println(minOperations("10"))   // 0
	fmt.Println(minOperations("1111")) // 2
}