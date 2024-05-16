package data

import (
	"fmt"
	"io"
	"os"

	ffmpeg "github.com/u2takey/ffmpeg-go"
)

func HandleConvert() error {
  file, err := os.OpenFile("input.mp4", os.O_RDONLY, 0644)
  if err != nil {
    fmt.Println(err)
  }
  defer file.Close()
  fmt.Println("File Opened (mp4)")

  tempFile, err := os.CreateTemp("", "temporaryMp4File.mp4")
  if err != nil {
    fmt.Println(err)
  }
  defer tempFile.Close()
  defer os.Remove(tempFile.Name())
  fmt.Println("Temp File Created (mp4)")

  _, err = io.Copy(tempFile, file)
  if err != nil {
    fmt.Println(err)
  }
  fmt.Println("Copied File data to Temp File (mp4)")

	err = ffmpeg.Input(tempFile.Name()).
		Output("output.mp3", ffmpeg.KwArgs{
			"vn":     "",
			"acodec": "libmp3lame",
		}).Run()
	if err != nil {
		fmt.Println(err)
	}
  fmt.Println("File Converted(mp4 to mp3)")

  return nil
}
