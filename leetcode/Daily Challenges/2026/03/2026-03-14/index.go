package main

import (
	"fmt"
	"strings"
)

func getHappyString(n int, k int) string {
	total := 3
	for i := 0; i < n-1; i++ {
		total *= 2
	}
	if k > total {
		return ""
	}

	var b strings.Builder
	prev := byte(0)
	for i := 0; i < n; i++ {
		countPer := 1
		for j := 0; j < n-1-i; j++ {
			countPer *= 2
		}
		options := []byte{'a', 'b', 'c'}
		for _, c := range options {
			if c == prev {
				continue
			}
			if k <= countPer {
				b.WriteByte(c)
				prev = c
				break
			}
			k -= countPer
		}
	}
	return b.String()
}

func main() {
	fmt.Println(getHappyString(1, 3))
	fmt.Println(getHappyString(1, 4))
	fmt.Println(getHappyString(3, 9))
}