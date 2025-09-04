const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utils/db');

// Define the FRA Claim model
const FRAClaim = db.define('FRAClaim', {
    claimantName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    village: {
        type: DataTypes.STRING,
        allowNull: false
    },
    district: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    claimType: {
        type: DataTypes.ENUM('IFR', 'CR', 'CFR'),
        allowNull: false
    },
    claimStatus: {
        type: DataTypes.ENUM('Filed', 'Approved', 'Pending'),
        allowNull: false
    },
    area: {
        type: DataTypes.FLOAT, // Area in hectares
        allowNull: false
    }
}, {
    tableName: 'fra_claims',
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Export the model
module.exports = FRAClaim;