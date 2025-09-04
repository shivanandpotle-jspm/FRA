const express = require('express');
const Asset = require('../models/asset');

const router = express.Router();

// Get all assets
router.get('/', async (req, res) => {
    try {
        const assets = await Asset.find();
        res.status(200).json(assets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get asset by ID
router.get('/:id', async (req, res) => {
    try {
        const asset = await Asset.findById(req.params.id);
        if (!asset) return res.status(404).json({ message: 'Asset not found' });
        res.status(200).json(asset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new asset
router.post('/', async (req, res) => {
    const asset = new Asset(req.body);
    try {
        const savedAsset = await asset.save();
        res.status(201).json(savedAsset);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update an asset
router.put('/:id', async (req, res) => {
    try {
        const updatedAsset = await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAsset) return res.status(404).json({ message: 'Asset not found' });
        res.status(200).json(updatedAsset);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete an asset
router.delete('/:id', async (req, res) => {
    try {
        const deletedAsset = await Asset.findByIdAndDelete(req.params.id);
        if (!deletedAsset) return res.status(404).json({ message: 'Asset not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;