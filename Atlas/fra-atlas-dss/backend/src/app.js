const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./utils/db');
const fraClaimsRoutes = require('./routes/fraClaimsRoutes');
const assetRoutes = require('./routes/assetRoutes');
const dssRoutes = require('./routes/dssRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
db.connect();

// Routes
app.use('/api/fra-claims', fraClaimsRoutes);
app.use('/api/assets', assetRoutes);
app.use('/api/dss', dssRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});