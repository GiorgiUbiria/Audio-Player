package main

import (
	"fmt"
	"io"
	"net/http"
	"os"

	ffmpeg "github.com/u2takey/ffmpeg-go"
)

func main() {
	// http.HandleFunc("/convert", handleConvert)
	// http.ListenAndServe(":8080", nil)
	handleLocalConvert()
}

func handleConvert(w http.ResponseWriter, r *http.Request) {
	err := r.ParseMultipartForm(32 << 20)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	file, handler, err := r.FormFile("uploadfile")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer file.Close()

	inputFile, err := os.CreateTemp("", handler.Filename)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer os.Remove(inputFile.Name())
	defer inputFile.Close()

	_, err = io.Copy(inputFile, file)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	outputFile := inputFile.Name() + ".converted.mp3"
	err = ffmpeg.Input(inputFile.Name()).
		Output(outputFile, ffmpeg.KwArgs{"vn": "", "acodec": "libmp3lame"}).
		ErrorToStdOut().Run()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer os.Remove(outputFile)

	http.ServeFile(w, r, outputFile)
}

func handleLocalConvert() error {
	tempName := "TempFile"
	file, err := os.OpenFile("uploadfile", os.O_RDONLY, 0)
	if err != nil {
		return fmt.Errorf("failed to open file: %w", err)
	}
	defer file.Close()

	inputFile, err := os.CreateTemp("", tempName)
	if err != nil {
		return fmt.Errorf("failed to create temp file: %w", err)
	}
	defer os.Remove(inputFile.Name())
	defer inputFile.Close()

	_, err = io.Copy(inputFile, file)
	if err != nil {
		return fmt.Errorf("failed to copy file: %w", err)
	}

	outputFile := inputFile.Name() + ".converted.mp3"
	err = ffmpeg.Input(inputFile.Name()).
		Output(outputFile, ffmpeg.KwArgs{"vn": "", "acodec": "libmp3lame"}).
		ErrorToStdOut().Run()
	if err != nil {
		return fmt.Errorf("ffmpeg conversion failed: %w", err)
	}
	defer os.Remove(outputFile)

	return nil
}
