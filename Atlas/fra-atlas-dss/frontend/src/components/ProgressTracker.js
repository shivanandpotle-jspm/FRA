import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProgressTracker = () => {
    const [claimsData, setClaimsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClaimsData = async () => {
            try {
                const response = await axios.get('/api/fra-claims/progress');
                setClaimsData(response.data);
            } catch (error) {
                console.error('Error fetching claims data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchClaimsData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const totalClaims = claimsData.length;
    const approvedClaims = claimsData.filter(claim => claim.status === 'approved').length;
    const pendingClaims = claimsData.filter(claim => claim.status === 'pending').length;
    const rejectedClaims = claimsData.filter(claim => claim.status === 'rejected').length;

    return (
        <div className="progress-tracker">
            <h2>FRA Claims Progress Tracker</h2>
            <div className="progress-summary">
                <p>Total Claims: {totalClaims}</p>
                <p>Approved Claims: {approvedClaims}</p>
                <p>Pending Claims: {pendingClaims}</p>
                <p>Rejected Claims: {rejectedClaims}</p>
            </div>
            <div className="progress-bar">
                <div className="progress-bar-approved" style={{ width: `${(approvedClaims / totalClaims) * 100}%` }} />
                <div className="progress-bar-pending" style={{ width: `${(pendingClaims / totalClaims) * 100}%` }} />
                <div className="progress-bar-rejected" style={{ width: `${(rejectedClaims / totalClaims) * 100}%` }} />
            </div>
        </div>
    );
};

export default ProgressTracker;