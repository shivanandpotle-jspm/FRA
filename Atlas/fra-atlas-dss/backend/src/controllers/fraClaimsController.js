const db = require('../utils/db');

// Get all FRA claims
exports.getAllFraClaims = async (req, res) => {
    try {
        const claims = await db.query('SELECT * FROM fra_claims');
        res.status(200).json(claims.rows);
    } catch (error) {
        console.error("Error fetching FRA claims:", error);
        res.status(500).json({ error: 'Failed to retrieve FRA claims' });
    }
};

// Get a single FRA claim by ID
exports.getFraClaimById = async (req, res) => {
    const { id } = req.params;
    try {
        const claim = await db.query('SELECT * FROM fra_claims WHERE id = $1', [id]);
        if (claim.rows.length === 0) {
            return res.status(404).json({ error: 'FRA claim not found' });
        }
        res.status(200).json(claim.rows[0]);
    } catch (error) {
        console.error("Error fetching FRA claim by ID:", error);
        res.status(500).json({ error: 'Failed to retrieve FRA claim' });
    }
};

// Create a new FRA claim
exports.createFraClaim = async (req, res) => {
    const { claimantName, village, district, state, claimType, claimStatus, area } = req.body;
    try {
        const newClaim = await db.query(
            'INSERT INTO fra_claims (claimant_name, village, district, state, claim_type, claim_status, area) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [claimantName, village, district, state, claimType, claimStatus, area]
        );
        res.status(201).json(newClaim.rows[0]);
    } catch (error) {
        console.error("Error creating FRA claim:", error);
        res.status(500).json({ error: 'Failed to create FRA claim' });
    }
};

// Update an existing FRA claim
exports.updateFraClaim = async (req, res) => {
    const { id } = req.params;
    const { claimantName, village, district, state, claimType, claimStatus, area } = req.body;
    try {
        const updatedClaim = await db.query(
            'UPDATE fra_claims SET claimant_name = $1, village = $2, district = $3, state = $4, claim_type = $5, claim_status = $6, area = $7 WHERE id = $8 RETURNING *',
            [claimantName, village, district, state, claimType, claimStatus, area, id]
        );
        if (updatedClaim.rows.length === 0) {
            return res.status(404).json({ error: 'FRA claim not found' });
        }
        res.status(200).json(updatedClaim.rows[0]);
    } catch (error) {
        console.error("Error updating FRA claim:", error);
        res.status(500).json({ error: 'Failed to update FRA claim' });
    }
};

// Delete an FRA claim
exports.deleteFraClaim = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedClaim = await db.query('DELETE FROM fra_claims WHERE id = $1 RETURNING *', [id]);
        if (deletedClaim.rows.length === 0) {
            return res.status(404).json({ error: 'FRA claim not found' });
        }
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting FRA claim:", error);
        res.status(500).json({ error: 'Failed to delete FRA claim' });
    }
};
