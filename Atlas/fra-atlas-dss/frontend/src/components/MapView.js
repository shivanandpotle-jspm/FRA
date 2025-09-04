import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import axios from 'axios';

const MapView = () => {
    const [fraClaims, setFraClaims] = useState([]);
    const [villageBoundaries, setVillageBoundaries] = useState([]);
    const [forestCover, setForestCover] = useState([]);
    const [assetClassification, setAssetClassification] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const claimsResponse = await axios.get('/api/fraClaims');
                const villageResponse = await axios.get('/api/assets/villageBoundaries');
                const forestResponse = await axios.get('/api/assets/forestCover');
                const assetResponse = await axios.get('/api/assets/assetClassification');

                setFraClaims(claimsResponse.data);
                setVillageBoundaries(villageResponse.data);
                setForestCover(forestResponse.data);
                setAssetClassification(assetResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <GeoJSON data={fraClaims} style={{ color: 'blue', weight: 2 }} />
            <GeoJSON data={villageBoundaries} style={{ color: 'green', weight: 1 }} />
            <GeoJSON data={forestCover} style={{ color: 'darkgreen', weight: 1 }} />
            <GeoJSON data={assetClassification} style={{ color: 'orange', weight: 1 }} />
        </MapContainer>
    );
};

export default MapView;