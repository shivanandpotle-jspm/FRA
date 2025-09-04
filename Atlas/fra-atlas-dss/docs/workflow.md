# Workflow of the FRA Atlas and Decision Support System

## Overview
The FRA Atlas and Decision Support System (DSS) is designed to facilitate the integrated monitoring of the Forest Rights Act (FRA) implementation through an AI-powered approach and a WebGIS interface. This document outlines the workflow of the system, detailing the steps from data digitization to user interaction.

## Workflow Steps

1. **Data Collection**
   - Scanned FRA documents are collected from various sources, including government offices and local bodies.

2. **AI-powered Data Digitization**
   - The OCR and NLP pipeline processes the scanned documents to extract relevant entities such as:
     - Claimant Name
     - Village
     - District
     - State
     - Type of Claim (IFR/CR/CFR)
     - Claim Status
     - Area (hectares)
   - Extracted data is structured and stored in a PostgreSQL database with PostGIS support for spatial queries.

3. **WebGIS-based FRA Atlas**
   - The backend, built with Node.js and Express, serves the data to the frontend.
   - The React frontend utilizes Mapbox or Leaflet to render an interactive map displaying:
     - FRA claim areas (in shapefiles/GeoJSON format)
     - Layers for village boundaries, forest cover, agricultural land, and water bodies
   - Users can apply filters to view data based on state, district, village, and tribal group.
   - A progress tracker displays the status of FRA claims (filed, approved, pending).

4. **AI-based Asset Mapping**
   - Public satellite data (e.g., Sentinel-2, Landsat) is preprocessed using Google Earth Engine or QGIS.
   - Machine learning models (Random Forest, CNN, U-Net) are trained to classify land use into categories such as:
     - Agricultural Fields
     - Forest Cover
     - Water Bodies
     - Settlements
   - The classified asset maps are exported as GIS layers and overlaid on the FRA Atlas.

5. **Decision Support System (DSS)**
   - The DSS engine utilizes a rule-based approach, potentially enhanced with AI models.
   - Input data includes FRA household/village data and asset maps.
   - The system generates recommendations for linking FRA beneficiaries to relevant Central Sector Schemes, such as:
     - PM-KISAN
     - Jal Jeevan Mission
     - MGNREGA
     - DAJGUA
   - Example rules include:
     - Villages with low water index → Recommend Jal Jeevan Mission projects.
     - FRA patta holders with farmland → Recommend PM-KISAN benefits.
   - Recommendations are displayed in the WebGIS dashboard for user access.

6. **User Interaction**
   - Users interact with the WebGIS interface to visualize FRA claims, asset maps, and receive DSS recommendations.
   - The system allows for feedback and updates to claims and recommendations, ensuring continuous improvement and accuracy.

## Conclusion
This workflow outlines the comprehensive process of the FRA Atlas and DSS, from data collection and processing to user interaction. Each component is designed to work seamlessly together, providing a robust tool for monitoring and supporting the implementation of the Forest Rights Act.