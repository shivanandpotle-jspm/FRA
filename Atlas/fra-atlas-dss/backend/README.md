# FRA Atlas and Decision Support System (DSS) Backend

## Overview
The FRA Atlas and Decision Support System (DSS) is an integrated platform designed to monitor and support the implementation of the Forest Rights Act (FRA). This backend component is built using Node.js and Express, providing a robust API for managing FRA claims, asset data, and generating recommendations for beneficiaries.

## Objectives
- To create a RESTful API for managing FRA claims and asset data.
- To integrate with a PostgreSQL database with PostGIS support for spatial data handling.
- To facilitate the Decision Support System (DSS) that provides recommendations based on FRA claims and asset mapping.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- PostgreSQL (version 12 or higher)
- PostGIS extension for PostgreSQL

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/fra-atlas-dss.git
   cd fra-atlas-dss/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the PostgreSQL database:
   - Create a new database for the project.
   - Run the SQL scripts in the `database` folder to initialize the schema and populate it with dummy data.

4. Configure environment variables:
   - Create a `.env` file in the `backend` directory and add your database connection details:
     ```
     DB_HOST=localhost
     DB_PORT=5432
     DB_USER=your_username
     DB_PASSWORD=your_password
     DB_NAME=your_database_name
     ```

5. Start the server:
   ```bash
   npm start
   ```

### API Usage
The backend exposes several endpoints for managing FRA claims and asset data. Below are some key routes:

- **FRA Claims**
  - `GET /api/fra-claims`: Retrieve all FRA claims.
  - `POST /api/fra-claims`: Create a new FRA claim.
  - `PUT /api/fra-claims/:id`: Update an existing FRA claim.
  - `DELETE /api/fra-claims/:id`: Delete a FRA claim.

- **Asset Data**
  - `GET /api/assets`: Retrieve all asset data.
  - `POST /api/assets`: Create new asset data.

- **DSS Recommendations**
  - `GET /api/recommendations`: Retrieve recommendations based on FRA claims and asset data.

## Folder Structure
- `src`: Contains the main application code.
  - `controllers`: Logic for handling requests and responses.
  - `routes`: Defines the API endpoints.
  - `models`: Database schemas for FRA claims, assets, and recommendations.
  - `utils`: Utility functions, including database connection logic.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.