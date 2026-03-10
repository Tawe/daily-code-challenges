package main

import (
	"fmt"
	"regexp"
)

func reverseVowels(s string) string {
	vowels := "aeiouAEIOU"
	re := regexp.MustCompile(`[aeiouAEIOU]`)

	vowelArray := re.FindAllString(s, -1)

	for i, j := 0, len(vowelArray)-1; i < j; i, j = i+1, j-1 {
		vowelArray[i], vowelArray[j] = vowelArray[j], vowelArray[i]
	}

	runes := []rune(s)
	index := 0

	for i := 0; i < len(runes); i++ {
		if strings.ContainsRune(vowels, runes[i]) {
			runes[i] = []rune(vowelArray[index])[0]
			index++
		}
	}

	return string(runes)
}

func main() {
	fmt.Println(reverseVowels("IceCreAm"))
	fmt.Println(reverseVowels("leetcode"))
}