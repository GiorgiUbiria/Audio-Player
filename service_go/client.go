package main

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/supabase-community/supabase-go"
)

func goDotEnvVariable(key string) string {
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	return os.Getenv(key)
}

func createClient() *supabase.Client {
	url := goDotEnvVariable("SUPABASE_URL")
	key := goDotEnvVariable("SUPABASE_ANON_KEY")
	client, err := supabase.NewClient(url, key, nil)
	if err != nil {
		fmt.Println("cannot initalize client", err)
	}

	return client
}
