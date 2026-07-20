#!/bin/bash

echo "===== Github Project Setup ====="

git init 
git branch -M main
git add .

git commit -m "Initial Playwright POM project"

git remote add origin https://github.com/HanabarKaveri/POM-playwright-saucedemo.git

git push -u origin main

echo "Project pushed successfully!"
