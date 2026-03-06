package main

import "fmt"

func checkOnesSegment(s string) bool {
	seenZero := false
	for i := 0; i < len(s); i++ {
		if s[i] == '0' {
			seenZero = true
		} else {
			if seenZero {
				return false
			}
		}
	}
	return true
}

func main() {
	fmt.Println(checkOnesSegment("110"))
	fmt.Println(checkOnesSegment("1010"))
	fmt.Println(checkOnesSegment("1"))
	fmt.Println(checkOnesSegment("10"))
}