
#!/bin/bash

# Install system-level dependencies
sudo apt-get update
sudo apt-get install -y python3-pip docker.io docker-compose

# Install Python dependencies
pip install -r requirements.txt

# Install Node dependencies for frontend
cd flowcytometry-frontend
npm install || npx create-react-app .
npm install
cd ..
