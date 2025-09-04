const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utils/db');

// Define the Asset model
const Asset = db.define('Asset', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    area: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    classification: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    coordinates: {
        type: DataTypes.GEOMETRY('POLYGON'),
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

// Export the Asset model
module.exports = Asset;