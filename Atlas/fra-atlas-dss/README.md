# FRA Atlas and Decision Support System (DSS)

## Overview
The FRA Atlas and Decision Support System (DSS) is an integrated platform designed to monitor and support the implementation of the Forest Rights Act (FRA) in India. This project leverages AI technologies, GIS mapping, and a web-based interface to provide stakeholders with tools for effective decision-making and resource allocation.

## Objectives
- **AI-powered Data Digitization**: Utilize OCR and NLP to extract relevant information from scanned FRA documents and store it in a structured format.
- **WebGIS-based FRA Atlas**: Develop an interactive map that visualizes FRA claims and related spatial data.
- **AI-based Asset Mapping**: Classify land use using satellite imagery and integrate this data into the FRA Atlas.
- **Decision Support System (DSS)**: Provide recommendations for linking FRA beneficiaries to relevant government schemes based on data analysis.

## Technical Stack
- **Frontend**: React, Leaflet/Mapbox
- **Backend**: Node.js, Express
- **Database**: PostgreSQL, PostGIS
- **AI/ML**: Python (TensorFlow/PyTorch, scikit-learn, OpenCV, HuggingFace)
- **OCR**: Tesseract / AWS Textract / Google Vision
- **GIS Processing**: Google Earth Engine, QGIS
- **Hosting**: AWS/Azure/GCP

## Getting Started
### Prerequisites
- Node.js and npm installed
- PostgreSQL with PostGIS extension
- Python 3.x with required libraries

### Installation
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd fra-atlas-dss
   ```

2. **Setup the Backend**:
   - Navigate to the `backend` directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Initialize the database:
     ```
     psql -U <username> -d <database_name> -f ../database/init.sql
     psql -U <username> -d <database_name> -f ../database/demo_fra_claims.sql
     ```
   - Start the server:
     ```
     npm start
     ```

3. **Setup the Frontend**:
   - Navigate to the `frontend` directory:
     ```
     cd ../frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the React application:
     ```
     npm start
     ```

4. **Setup the AI Components**:
   - Navigate to the `ai` directory:
     ```
     cd ../ai
     ```
   - Install Python dependencies:
     ```
     pip install -r requirements.txt
     ```

## Usage
- Access the WebGIS interface at `http://localhost:3000` to visualize FRA claims and interact with the map.
- Use the AI components to process scanned documents and generate asset classifications.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments
- Special thanks to the contributors and organizations supporting the Forest Rights Act implementation.