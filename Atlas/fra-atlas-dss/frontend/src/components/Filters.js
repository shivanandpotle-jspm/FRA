import React, { useState, useEffect } from 'react';

const Filters = ({ onFilterChange }) => {
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [village, setVillage] = useState('');
    const [tribalGroup, setTribalGroup] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        // Fetch states, districts, villages, and tribal groups from the backend
        // This is a placeholder for actual API calls
    }, []);

    const handleFilterChange = () => {
        onFilterChange({ state, district, village, tribalGroup, status });
    };

    return (
        <div className="filters">
            <h3>Filters</h3>
            <div>
                <label>State:</label>
                <select value={state} onChange={(e) => setState(e.target.value)}>
                    <option value="">Select State</option>
                    {/* Map through states here */}
                </select>
            </div>
            <div>
                <label>District:</label>
                <select value={district} onChange={(e) => setDistrict(e.target.value)}>
                    <option value="">Select District</option>
                    {/* Map through districts here */}
                </select>
            </div>
            <div>
                <label>Village:</label>
                <select value={village} onChange={(e) => setVillage(e.target.value)}>
                    <option value="">Select Village</option>
                    {/* Map through villages here */}
                </select>
            </div>
            <div>
                <label>Tribal Group:</label>
                <select value={tribalGroup} onChange={(e) => setTribalGroup(e.target.value)}>
                    <option value="">Select Tribal Group</option>
                    {/* Map through tribal groups here */}
                </select>
            </div>
            <div>
                <label>Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="">Select Status</option>
                    <option value="filed">Filed</option>
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
            <button onClick={handleFilterChange}>Apply Filters</button>
        </div>
    );
};

export default Filters;