# System Explanation of the AI-powered FRA Atlas and WebGIS-based Decision Support System (DSS)

## Overview
The AI-powered FRA Atlas and WebGIS-based Decision Support System (DSS) is designed to facilitate the integrated monitoring of the Forest Rights Act (FRA) implementation. This system leverages advanced technologies such as Optical Character Recognition (OCR), Natural Language Processing (NLP), Geographic Information Systems (GIS), and Machine Learning (ML) to provide a comprehensive solution for managing and analyzing FRA claims and related data.

## Component Integration

### 1. AI-powered Data Digitization
- **OCR + NLP Pipeline**: The system begins with the digitization of scanned FRA documents using an OCR and NLP pipeline implemented in `ai/ocr_nlp_pipeline.py`. This pipeline extracts key entities such as claimant name, village, district, state, type of claim (IFR/CR/CFR), claim status, and area (hectares).
- **Data Storage**: Extracted data is stored in a structured format in a PostgreSQL database with PostGIS support, allowing for spatial queries and analysis.

### 2. WebGIS-based FRA Atlas
- **Frontend**: The frontend is built using React and utilizes Mapbox or Leaflet for rendering an interactive map. The main component is located in `frontend/src/App.js`, which sets up routing and layout.
- **Backend**: The backend is developed using Node.js and Express, with routes defined in `backend/src/routes`. The backend handles requests for FRA claims and asset data, interfacing with the PostgreSQL database.
- **Features**:
  - Display of FRA claim areas using shapefiles or GeoJSON.
  - Layers for village boundaries, forest cover, agricultural land, and water bodies.
  - Filtering options for users to navigate through data based on state, district, village, and tribal group.
  - A progress tracker that visualizes the status of FRA claims (filed, approved, pending).

### 3. AI-based Asset Mapping
- **Satellite Data Processing**: The system utilizes public satellite data (e.g., Sentinel-2, Landsat) for asset mapping. The preprocessing of satellite imagery is handled in `ai/ml_asset_mapping.py`.
- **Machine Learning Models**: ML models (e.g., Random Forest, CNN, U-Net) are trained to classify land use into categories such as agricultural fields, forest cover, water bodies, and settlements. The results are exported as GIS layers and overlaid on the FRA Atlas.

### 4. Decision Support System (DSS)
- **Rule-based Engine**: The DSS is designed to provide recommendations based on the input data from FRA claims and asset maps. The logic is implemented in `backend/src/controllers/dssController.js`.
- **Example Rules**:
  - Villages with low water index are recommended for Jal Jeevan Mission projects.
  - FRA patta holders with farmland are recommended for PM-KISAN benefits.
- **Output**: Recommendations are displayed in the WebGIS dashboard, allowing users to access actionable insights.

## System Architecture
The architecture of the system can be visualized as follows:

```
FRA Document → OCR/NLP → PostgreSQL → FRA Atlas (WebGIS) 
   ↓
AI Asset Mapping → DSS Engine → Users
```

### Data Flow
1. **FRA Document**: Scanned documents are processed through the OCR/NLP pipeline.
2. **Data Storage**: Extracted data is stored in PostgreSQL.
3. **WebGIS Interface**: Users interact with the FRA Atlas to visualize claims and asset data.
4. **AI Processing**: Satellite data is processed to classify land use, which is then integrated into the WebGIS.
5. **DSS Recommendations**: The DSS analyzes the data and provides recommendations to users.

## Conclusion
The AI-powered FRA Atlas and WebGIS-based DSS is a robust solution that integrates various technologies to enhance the monitoring and implementation of the Forest Rights Act. By combining data digitization, GIS visualization, asset mapping, and decision support, the system aims to empower stakeholders and improve the management of forest rights in India.