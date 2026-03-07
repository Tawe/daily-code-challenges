package main

import "fmt"

func minFlips(s string) int {
	n := len(s)
	t := s + s
	var E1, O0, E0, O1 int
	for i := 0; i < n; i++ {
		c := t[i]
		if i&1 == 0 {
			if c == '1' {
				E1++
			} else {
				E0++
			}
		} else {
			if c == '0' {
				O0++
			} else {
				O1++
			}
		}
	}
	mis0 := E1 + O0
	mis1 := E0 + O1
	best := min(mis0, mis1)

	for k := 1; k < n; k++ {
		if n%2 == 0 {
			e1, e0 := E1, E0
			E1, E0 = O1, O0
			O1, O0 = e1, e0
			if t[k-1] == '1' {
				O1--
			} else {
				O0--
			}
			if t[k-1+n] == '1' {
				O1++
			} else {
				O0++
			}
		} else {
			o1, o0 := O1, O0
			O1, O0 = E1, E0
			if t[k-1] == '1' {
				O1--
			} else {
				O0--
			}
			E1, E0 = o1, o0
			if t[k-1+n] == '1' {
				E1++
			} else {
				E0++
			}
		}
		mis0 = E1 + O0
		mis1 = E0 + O1
		best = min(best, min(mis0, mis1))
	}
	return best
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func main() {
	fmt.Println(minFlips("111000"))
	fmt.Println(minFlips("010")) 
	fmt.Println(minFlips("1110"))
}