# AI Components for FRA Atlas and DSS

This directory contains the AI components of the FRA Atlas and Decision Support System (DSS) project. The main functionalities include an OCR and NLP pipeline for processing scanned FRA documents and a machine learning model for asset mapping.

## Overview

### OCR and NLP Pipeline
- The `ocr_nlp_pipeline.py` script implements an Optical Character Recognition (OCR) and Natural Language Processing (NLP) pipeline to extract relevant entities from scanned FRA documents. 
- Extracted entities include claimant name, village, district, state, type of claim (IFR/CR/CFR), claim status, and area (hectares).
- The processed data is stored in a structured format in a PostgreSQL database with PostGIS support.

### Machine Learning Asset Mapping
- The `ml_asset_mapping.py` script contains the machine learning model for asset mapping.
- It includes data preprocessing steps and classification of land use types such as agricultural fields, forest cover, water bodies, and settlements.
- The model utilizes public satellite data (e.g., Sentinel-2, Landsat) for training and generates GIS layers for integration with the FRA Atlas.

## Setup Instructions

1. **Install Dependencies**
   Ensure you have Python 3.x installed. Use the following command to install the required packages:
   ```
   pip install -r requirements.txt
   ```

2. **Run OCR and NLP Pipeline**
   Execute the OCR and NLP pipeline to process your scanned FRA documents:
   ```
   python ocr_nlp_pipeline.py
   ```

3. **Run Asset Mapping**
   To classify land use and generate asset maps, run:
   ```
   python ml_asset_mapping.py
   ```

## Usage Examples

- **OCR and NLP Pipeline**
  - Input: Scanned FRA document images.
  - Output: Structured data stored in PostgreSQL.

- **Asset Mapping**
  - Input: Satellite imagery.
  - Output: Classified land use GIS layers.

## Contribution
Feel free to contribute to this project by submitting issues or pull requests. For any questions or suggestions, please contact the project maintainers.

## License
This project is licensed under the MIT License. See the LICENSE file for details.