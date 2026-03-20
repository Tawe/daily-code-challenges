package main

import (
	"fmt"
	"strings"
)

func maxVowels(s string, k int) int {
	vowels := "aeiou"
	count := 0

	for i := 0; i < k; i++ {
		if strings.ContainsRune(vowels, rune(s[i])) {
			count++
		}
	}

	maxCount := count

	for i := k; i < len(s); i++ {
		if strings.ContainsRune(vowels, rune(s[i])) {
			count++
		}

		if strings.ContainsRune(vowels, rune(s[i-k])) {
			count--
		}

		if count > maxCount {
			maxCount = count
		}
	}

	return maxCount
}

func main() {
	fmt.Println(maxVowels("abciiidef", 3))
	fmt.Println(maxVowels("aeiou", 2))
	fmt.Println(maxVowels("leetcode", 3))
}	