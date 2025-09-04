const { Pool } = require("pg");

// PostgreSQL connection configuration
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Test connection once
pool.connect()
  .then(() => console.log("Connected to the database successfully"))
  .catch((err) => console.error("Database connection error:", err));

/**
 * Run a query
 * @param {string} text - SQL query
 * @param {Array} params - Query parameters
 * @returns {Promise} Query result
 */
const query = (text, params) => pool.query(text, params);

module.exports = {
  query,
  pool, // export in case you need raw pool
};
