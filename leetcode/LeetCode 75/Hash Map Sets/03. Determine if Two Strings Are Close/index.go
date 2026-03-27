package main

import (
	"fmt"
	"sort"
)

func closeStrings(word1 string, word2 string) bool {
	if len(word1) != len(word2) {
		return false
	}

	var freq1, freq2 [26]int
	for _, c := range word1 {
		freq1[c-'a']++
	}
	for _, c := range word2 {
		freq2[c-'a']++
	}

	for i := 0; i < 26; i++ {
		present1 := freq1[i] > 0
		present2 := freq2[i] > 0
		if present1 != present2 {
			return false
		}
	}

	counts1 := make([]int, 0, 26)
	counts2 := make([]int, 0, 26)
	for i := 0; i < 26; i++ {
		if freq1[i] > 0 {
			counts1 = append(counts1, freq1[i])
			counts2 = append(counts2, freq2[i])
		}
	}
	sort.Ints(counts1)
	sort.Ints(counts2)
	for i := range counts1 {
		if counts1[i] != counts2[i] {
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(closeStrings("abc", "bca"))
	fmt.Println(closeStrings("a", "aa"))
	fmt.Println(closeStrings("cabbba", "abbccc"))
}
