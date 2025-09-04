// dssController.js

const Recommendation = require('../models/recommendation');

// Function to get recommendations based on FRA claims and asset data
exports.getRecommendations = async (req, res) => {
    try {
        const { villageId } = req.params;

        // Fetch FRA claims and asset data for the specified village
        const fraClaims = await getFraClaimsByVillage(villageId);
        const assetData = await getAssetDataByVillage(villageId);

        // Generate recommendations based on the claims and asset data
        const recommendations = generateRecommendations(fraClaims, assetData);

        res.status(200).json({
            success: true,
            data: recommendations
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};

// Function to generate recommendations based on FRA claims and asset data
const generateRecommendations = (fraClaims, assetData) => {
    const recommendations = [];

    fraClaims.forEach(claim => {
        if (claim.status === 'approved') {
            if (assetData.waterIndex < 0.5) {
                recommendations.push({
                    scheme: 'Jal Jeevan Mission',
                    message: `Recommend water supply projects for village ${claim.village}.`
                });
            }
            if (claim.area > 2 && assetData.agriculturalLand > 0) {
                recommendations.push({
                    scheme: 'PM-KISAN',
                    message: `Recommend PM-KISAN benefits for FRA patta holders in ${claim.village}.`
                });
            }
        }
    });

    return recommendations;
};

// Mock function to simulate fetching FRA claims by village
const getFraClaimsByVillage = async (villageId) => {
    // This should be replaced with actual database query logic
    return [
        { id: 1, village: villageId, status: 'approved', area: 3 },
        { id: 2, village: villageId, status: 'pending', area: 1 }
    ];
};

// Mock function to simulate fetching asset data by village
const getAssetDataByVillage = async (villageId) => {
    // This should be replaced with actual database query logic
    return {
        waterIndex: 0.4,
        agriculturalLand: 5
    };
};