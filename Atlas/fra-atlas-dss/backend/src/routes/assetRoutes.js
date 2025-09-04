const express = require('express');
const router = express.Router();
const assetController = require('../controllers/assetController');

// Route to get all asset data
router.get('/', assetController.getAllAssets);

// Route to get asset data by ID
router.get('/:id', assetController.getAssetById);

// Route to create a new asset entry
router.post('/', assetController.createAsset);

// Route to update an existing asset entry
router.put('/:id', assetController.updateAsset);

// Route to delete an asset entry
router.delete('/:id', assetController.deleteAsset);

module.exports = router;