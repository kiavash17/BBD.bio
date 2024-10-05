
# Flow Cytometry Analysis Tool

## Project Overview
The Flow Cytometry Analysis Tool is a web-based platform designed to simplify the analysis of flow cytometry `.fcs` data. Users can upload their `.fcs` files, and the tool provides AI-based gating analysis and interactive visualizations.

## Features
- **File Upload**: Users can upload `.fcs` files directly through an intuitive web interface.
- **AI-Based Gating Analysis**: Automatically analyzes data using clustering algorithms to identify gated populations.
- **Interactive Visualizations**: Provides detailed visualizations using Plotly, which helps users interpret the results efficiently.
- **Dockerized Deployment**: The backend (Django) and frontend (React) are both containerized, making it easy to deploy.

## Prerequisites
- **Docker** and **Docker Compose** for containerized deployment.
- **Python 3.9** and **Node.js 14** or higher for local development.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/flowcytometry-analysis-tool.git
   cd flowcytometry-analysis-tool
   ```

2. **Run the Setup Script**
   ```bash
   ./setup.sh
   ```

3. **Build and Run Containers**
   - Build the Docker containers:
   ```bash
   docker-compose build
   ```
   - Start the containers:
   ```bash
   docker-compose up
   ```

## Usage
- **Frontend**: Accessible at `http://localhost:3000`.
- **Backend API**: Accessible at `http://localhost:8000`.

1. Open the frontend interface.
2. Upload an `.fcs` file through the form.
3. Wait for the analysis to complete and view the generated visualization.

## Testing

### Backend Testing
1. **Verify API Endpoints**
   - Use a tool like Postman or `curl` to test endpoints.
   ```bash
   curl -F "file=@test_file.fcs" http://localhost:8000/api/upload/
   ```
2. **Check Logs**
   ```bash
   docker-compose logs backend
   ```

### Frontend Testing
1. **Verify Interface**
   - Ensure the upload form is visible and functional.
2. **Check Logs**
   ```bash
   docker-compose logs frontend
   ```

### End-to-End Testing
1. Run both containers and test the complete workflow from file upload to visualization.
2. Verify that there are no errors in logs for both services.

## Functionality and Use Cases

- **Automated Flow Cytometry Analysis**: Automates the entire flow cytometry data analysis process, reducing the manual effort needed to gate and analyze cell populations.
- **Research**: Useful for researchers in immunology, cell biology, and related fields who require quick and accurate gating of cytometry data.
- **Data Interpretation**: Provides interactive visualizations, allowing users to better interpret the results and make informed decisions in their research.

## Troubleshooting
- **Backend Issues**:
  - Ensure the backend container is running (`docker-compose ps` should show it as `Up`).
  - Check for port conflicts or errors in logs (`docker-compose logs backend`).
- **Frontend Issues**:
  - If the frontend doesn't load, verify that the frontend container is running (`docker-compose ps`).
  - Clear browser cache or use a different browser.

## Contributing
- Fork the repository and create a new branch.
- Submit a pull request describing your changes.

## License
This project is licensed under the MIT License.
