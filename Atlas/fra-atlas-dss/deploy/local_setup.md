# Local Setup Instructions for FRA Atlas and DSS

This document provides step-by-step instructions to set up the FRA Atlas and Decision Support System (DSS) locally for development and testing purposes.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

1. **Node.js** (version 14 or higher)
2. **PostgreSQL** (version 12 or higher)
3. **Python** (version 3.7 or higher)
4. **pip** (Python package installer)
5. **Git** (for cloning the repository)

## Step 1: Clone the Repository

Open your terminal and run the following command to clone the project repository:

```bash
git clone https://github.com/yourusername/fra-atlas-dss.git
cd fra-atlas-dss
```

## Step 2: Set Up the Database

1. **Create a PostgreSQL Database:**

   Open the PostgreSQL command line or a GUI tool (like pgAdmin) and create a new database named `fra_atlas`.

   ```sql
   CREATE DATABASE fra_atlas;
   ```

2. **Initialize the Database Schema:**

   Navigate to the `database` directory and run the SQL initialization script:

   ```bash
   psql -U yourusername -d fra_atlas -f init.sql
   ```

3. **Populate the Database with Dummy Data:**

   Still in the `database` directory, run the following command to populate the database with dummy FRA claims data:

   ```bash
   psql -U yourusername -d fra_atlas -f demo_fra_claims.sql
   ```

## Step 3: Set Up the Backend

1. **Navigate to the Backend Directory:**

   ```bash
   cd backend
   ```

2. **Install Backend Dependencies:**

   Run the following command to install the required Node.js packages:

   ```bash
   npm install
   ```

3. **Start the Backend Server:**

   Start the backend server by running:

   ```bash
   npm start
   ```

   The server should now be running on `http://localhost:3000`.

## Step 4: Set Up the AI Components

1. **Navigate to the AI Directory:**

   ```bash
   cd ../ai
   ```

2. **Install AI Dependencies:**

   Use pip to install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

## Step 5: Set Up the Frontend

1. **Navigate to the Frontend Directory:**

   ```bash
   cd ../frontend
   ```

2. **Install Frontend Dependencies:**

   Run the following command to install the required React packages:

   ```bash
   npm install
   ```

3. **Start the Frontend Application:**

   Start the frontend application by running:

   ```bash
   npm start
   ```

   The application should now be running on `http://localhost:3001`.

## Step 6: Access the Application

Open your web browser and navigate to `http://localhost:3001` to access the FRA Atlas and DSS application.

## Troubleshooting

- Ensure that PostgreSQL is running and accessible.
- Check for any errors in the terminal output for both the backend and frontend applications.
- Verify that all dependencies are installed correctly.

## Conclusion

You have successfully set up the FRA Atlas and Decision Support System locally. You can now begin testing and developing features for the project. For further information, refer to the respective README files in each directory.