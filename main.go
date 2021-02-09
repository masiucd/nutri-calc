package main

import "fmt"

func fn(nums []int) bool {

	lockup := make(map[int]int)

	for _, v := range nums {
		_, ok := lockup[v]
		if ok == true {
			lockup[v]++
		} else {
			lockup[v] = 1
		}
	}
	
	for _, v := range lockup {
		fmt.Println(v)
		if v > 1 {
			return true
		}
	}
	return false
}

func main() {
	xs := []int{1, 2, 1, 3}

	res:=fn(xs)
	fmt.Println(res)
}
