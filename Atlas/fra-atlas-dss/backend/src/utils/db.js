const { Pool } = require('pg');

// PostgreSQL connection configuration
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Function to connect to the database
const connectDB = async () => {
    try {
        await pool.connect();
        console.log('Connected to the database successfully');
    } catch (err) {
        console.error('Database connection error:', err);
        throw err;
    }
};

// Function to execute a query
const executeQuery = async (query, params) => {
    try {
        const res = await pool.query(query, params);
        return res.rows;
    } catch (err) {
        console.error('Query execution error:', err);
        throw err;
    }
};

// Function to close the database connection
const closeDB = async () => {
    await pool.end();
    console.log('Database connection closed');
};

module.exports = {
    connectDB,
    executeQuery,
    closeDB,
};