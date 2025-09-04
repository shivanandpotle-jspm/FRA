const express = require('express');
const Asset = require('../models/asset'); // Sequelize model

const router = express.Router();

// Get all assets
router.get('/', async (req, res) => {
    try {
        const assets = await Asset.findAll(); // Sequelize method
        res.status(200).json(assets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get asset by ID
router.get('/:id', async (req, res) => {
    try {
        const asset = await Asset.findByPk(req.params.id); // Sequelize method
        if (!asset) return res.status(404).json({ message: 'Asset not found' });
        res.status(200).json(asset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new asset
router.post('/', async (req, res) => {
    try {
        const savedAsset = await Asset.create(req.body); // Sequelize create
        res.status(201).json(savedAsset);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update an asset
router.put('/:id', async (req, res) => {
    try {
        const asset = await Asset.findByPk(req.params.id);
        if (!asset) return res.status(404).json({ message: 'Asset not found' });

        await asset.update(req.body); // Sequelize update
        res.status(200).json(asset);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete an asset
router.delete('/:id', async (req, res) => {
    try {
        const asset = await Asset.findByPk(req.params.id);
        if (!asset) return res.status(404).json({ message: 'Asset not found' });

        await asset.destroy(); // Sequelize delete
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
