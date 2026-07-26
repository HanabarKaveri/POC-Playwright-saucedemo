#!/bin/bash

echo "===== Github Project Setup ====="

REPO_URL="https://github.com/HanabarKaveri/POM-playwright-saucedemo.git"

if [ ! -d ".git" ]; then
	git init
	git branch -M main
	git remote add origin "$REPO_URL"
fi

git add .

echo "Enter commit message:"
read MESSAGE

git commit -m "$MESSAGE"

git push -u origin main

echo "Project pushed successfully!"
