package main

import "fmt"

func asteroidCollision(asteroids []int) []int {
    stack := []int{}
    for _, asteroid := range asteroids {
        if asteroid > 0 {
            stack = append(stack, asteroid)
        } else {
            for len(stack) > 0 && stack[len(stack)-1] > 0 && stack[len(stack)-1] < -asteroid {
                stack = stack[:len(stack)-1]
            }
            if len(stack) > 0 && stack[len(stack)-1] == -asteroid {
                stack = stack[:len(stack)-1]
            } else if len(stack) == 0 || stack[len(stack)-1] < 0 {
                stack = append(stack, asteroid)
            }
        }
    }
    return stack
}

func main() {
	fmt.Println(asteroidCollision([5,10,-5]))
	fmt.Println(asteroidCollision([8,-8]))
	fmt.Println(asteroidCollision([10,2,-5]))
	fmt.Println(asteroidCollision([3,5,-6,2,-1,4]))
}