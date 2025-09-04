const express = require('express');
const router = express.Router();
const dssController = require('../controllers/dssController');

// Route to get recommendations based on FRA claims and asset maps
router.get('/recommendations', dssController.getRecommendations);

// Route to get all DSS data
router.get('/', dssController.getAllDSSData);

// Route to create a new recommendation
router.post('/', dssController.createRecommendation);

// Route to update an existing recommendation
router.put('/:id', dssController.updateRecommendation);

// Route to delete a recommendation
router.delete('/:id', dssController.deleteRecommendation);

module.exports = router;