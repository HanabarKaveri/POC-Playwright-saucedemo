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

echo "Pulling latest changes from GitHub..."
git pull origin main --rebase

if [ $? -ne 0 ]; then
    echo "Pull failed! Resolve conflicts and try again."
    exit 1
fi

echo "Pushing changes to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "Project pushed successfully!"
else
    echo "Push failed!"
fi
