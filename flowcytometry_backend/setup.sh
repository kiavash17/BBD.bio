
#!/bin/bash

# Install system-level dependencies
sudo apt-get update
sudo apt-get install -y python3-pip docker.io docker-compose

# Install Python dependencies
pip install -r requirements.txt

# Navigate to frontend and install Node dependencies
cd ../flowcytometry-frontend
npm install
