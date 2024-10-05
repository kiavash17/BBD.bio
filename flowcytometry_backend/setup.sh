#!/bin/bash

# Install system-level dependencies
sudo apt-get update
sudo apt-get install -y python3-pip docker.io docker-compose containerd

# Check if Docker and Node.js installed correctly
if ! command -v docker &> /dev/null || ! command -v npm &> /dev/null
then
    echo "Docker or Node.js could not be installed. Please install them manually."
    exit 1
fi

# Install Python dependencies
if [ -f "requirements.txt" ]; then
    pip install -r requirements.txt
else
    echo "requirements.txt not found!"
    exit 1
fi

# Set up frontend project
if [ ! -d "flowcytometry-frontend" ]; then
    mkdir flowcytometry-frontend
    cd flowcytometry-frontend
    npx create-react-app .
    cd ..
else
    cd flowcytometry-frontend
    npm install
    cd ..
