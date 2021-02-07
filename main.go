package main

import "fmt"


func makeCount() func() int {
	count := 0

	return func() int {
		count++
		fmt.Printf("%d\n",count)
		return count
	}
}

func main() {

	var count = makeCount()
	count()
	count()
	count()
	count()
}