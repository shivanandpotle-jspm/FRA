# Cloud Deployment Instructions for FRA Atlas and DSS

This document provides step-by-step instructions for deploying the FRA Atlas and Decision Support System (DSS) on a cloud service. The deployment process involves setting up the backend, frontend, and database components in a cloud environment.

## Prerequisites

1. **Cloud Account**: Ensure you have an account with a cloud service provider (AWS, Azure, GCP, etc.).
2. **Domain Name**: Optional, but recommended for accessing the application.
3. **PostgreSQL Database**: Set up a managed PostgreSQL database service (e.g., AWS RDS, Azure Database for PostgreSQL).

## Deployment Steps

### 1. Set Up PostgreSQL Database

- Create a new PostgreSQL database instance in your cloud provider.
- Note down the connection details (host, port, database name, username, password).
- Run the SQL scripts from the `database` directory to initialize the database schema and populate it with dummy data:
  ```bash
  psql -h <host> -U <username> -d <database> -f init.sql
  psql -h <host> -U <username> -d <database> -f demo_fra_claims.sql
  ```

### 2. Deploy the Backend

- **Clone the Repository**:
  ```bash
  git clone <repository-url>
  cd fra-atlas-dss/backend
  ```

- **Install Dependencies**:
  ```bash
  npm install
  ```

- **Configure Environment Variables**:
  Create a `.env` file in the `backend` directory with the following content:
  ```
  DATABASE_URL=postgres://<username>:<password>@<host>:<port>/<database>
  PORT=5000
  ```

- **Start the Backend Server**:
  ```bash
  npm start
  ```

### 3. Deploy the Frontend

- **Navigate to the Frontend Directory**:
  ```bash
  cd ../frontend
  ```

- **Install Dependencies**:
  ```bash
  npm install
  ```

- **Build the Frontend**:
  ```bash
  npm run build
  ```

- **Deploy the Build**:
  Upload the contents of the `build` directory to your cloud provider's static hosting service (e.g., AWS S3, Azure Blob Storage).

### 4. Configure Domain and SSL (Optional)

- If you have a domain name, configure it to point to your frontend hosting service.
- Set up SSL certificates using services like AWS Certificate Manager or Let's Encrypt for secure HTTPS access.

### 5. Testing the Deployment

- Access the application using the cloud service URL or your domain name.
- Verify that the backend API is reachable and the frontend is functioning correctly.

### 6. Monitoring and Maintenance

- Set up monitoring tools provided by your cloud service to keep track of application performance and errors.
- Regularly update dependencies and apply security patches.

## Conclusion

Following these instructions will help you successfully deploy the FRA Atlas and DSS on a cloud service. Ensure to monitor the application and make necessary adjustments based on user feedback and performance metrics.