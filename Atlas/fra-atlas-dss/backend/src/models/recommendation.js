const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
    village: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    tribalGroup: {
        type: String,
        required: true
    },
    recommendations: [{
        scheme: {
            type: String,
            required: true
        },
        reason: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }]
});

const Recommendation = mongoose.model('Recommendation', recommendationSchema);

module.exports = Recommendation;