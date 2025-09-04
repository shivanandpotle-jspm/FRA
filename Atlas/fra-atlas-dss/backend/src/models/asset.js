const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

// Define the Asset model
const Asset = sequelize.define(
  "Asset",
  {
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
      type: DataTypes.GEOMETRY("POLYGON"),
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
  },
  {
    tableName: "assets", // explicit table name
    timestamps: true, // automatically handles createdAt & updatedAt
  }
);

module.exports = Asset;
