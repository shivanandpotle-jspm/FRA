const express = require('express');
const router = express.Router();
const fraClaimsController = require('../controllers/fraClaimsController');

// Route to get all FRA claims
router.get('/', fraClaimsController.getAllClaims);

// Route to get a specific FRA claim by ID
router.get('/:id', fraClaimsController.getClaimById);

// Route to create a new FRA claim
router.post('/', fraClaimsController.createClaim);

// Route to update an existing FRA claim
router.put('/:id', fraClaimsController.updateClaim);

// Route to delete a FRA claim
router.delete('/:id', fraClaimsController.deleteClaim);

module.exports = router;