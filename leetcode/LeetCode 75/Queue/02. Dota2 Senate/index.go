package main

import "fmt"

func predictPartyVictory(senate string) string {
	radiantQueue := []int{}
	direQueue := []int{}

	for i, c := range senate {
		if c == 'R' {
			radiantQueue = append(radiantQueue, i)
		} else {
			direQueue = append(direQueue, i)
		}
	}
	
	for len(radiantQueue) > 0 && len(direQueue) > 0 {
		if radiantQueue[0] < direQueue[0] {
			direQueue = direQueue[1:]
			radiantQueue = append(radiantQueue, len(senate)+radiantQueue[0])
			radiantQueue = radiantQueue[1:]

		} else {
			radiantQueue = radiantQueue[1:]
			direQueue = append(direQueue, len(senate)+direQueue[0])
			direQueue = direQueue[1:]
		}
	}

	if len(radiantQueue) > 0 {
		return "Radiant"
	} else {
		return "Dire"
	}
}

func main() {
	fmt.Println(predictPartyVictory("RD"))
	fmt.Println(predictPartyVictory("RDD"))
}