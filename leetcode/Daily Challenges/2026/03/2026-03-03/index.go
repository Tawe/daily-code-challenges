package main

import "fmt"

func findKthBit(n int, k int) byte {
	if n == 1 {
		return '0'
	}

	length := (1 << n) - 1
	mid := (length + 1) / 2

	if k == mid {
		return '1'
	}

	if k < mid {
		return findKthBit(n-1, k)
	}

	mirrored := length + 1 - k
	b := findKthBit(n-1, mirrored)
	if b == '0' {
		return '1'
	}
	return '0'
}

func main() {
	fmt.Printf("%c\n", findKthBit(3, 1))   // "0"
	fmt.Printf("%c\n", findKthBit(4, 11)) // "1"
}