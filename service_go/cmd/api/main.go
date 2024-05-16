package main

import (
	_ "fmt"

	"giorgiubiria.github.com/data"

	_ "github.com/u2takey/ffmpeg-go"
)

func main() {
	data.HandleConvert()
}
