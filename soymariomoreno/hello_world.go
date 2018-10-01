package main

import "fmt"
import "gopkg.in/kyokomi/emoji.v1"

func main() {
	pizzaMessage := emoji.Sprint("Hello World, Hacktoberfest :beer: Beer!!!")
	fmt.Println(pizzaMessage)
}
