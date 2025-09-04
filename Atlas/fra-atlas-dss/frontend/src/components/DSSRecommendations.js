import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DSSRecommendations = () => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await axios.get('/api/dss/recommendations');
                setRecommendations(response.data);
            } catch (error) {
                console.error('Error fetching recommendations:', error);
            }
        };

        fetchRecommendations();
    }, []);

    return (
        <div className="dss-recommendations">
            <h2>DSS Recommendations</h2>
            {recommendations.length > 0 ? (
                <ul>
                    {recommendations.map((rec, index) => (
                        <li key={index}>
                            <strong>Village:</strong> {rec.village} - <strong>Recommendation:</strong> {rec.recommendation}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No recommendations available at this time.</p>
            )}
        </div>
    );
};

export default DSSRecommendations;