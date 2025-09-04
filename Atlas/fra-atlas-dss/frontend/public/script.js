// public/script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Element References ---
    const uploadForm = document.getElementById('upload-form');
    const dataFileInput = document.getElementById('data-file');
    const statusMessage = document.getElementById('status-message');
    const tableHead = document.getElementById('table-head');
    const tableBody = document.getElementById('table-body');
    const submitButton = uploadForm.querySelector('button[type="submit"]'); // Get the submit button
    
    // --- FIX: Use a relative path for the API URL ---
    // This allows the frontend to call the backend on the same domain,
    // which is essential for deployment.
    const API_URL = '/api';

    // --- Leaflet Map Initialization ---
    const map = L.map('map').setView([20.5937, 78.9629], 5); // Center on India
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    let geoLayer = L.layerGroup().addTo(map); // Layer group to hold markers/shapes for easy clearing

    /**
     * Renders the data table with headers and rows.
     * @param {string[]} headers - Array of column headers.
     * @param {object[]} rows - Array of data row objects.
     */
    const renderTable = (headers, rows) => {
        tableHead.innerHTML = '';
        tableBody.innerHTML = '';

        if (headers.length === 0) {
            tableBody.innerHTML = `<tr><td class="px-6 py-4 text-gray-500 text-center" colspan="100%">No data to display.</td></tr>`;
            return;
        }

        const headerRow = document.createElement('tr');
        headers.forEach(header => {
            const th = document.createElement('th');
            th.scope = 'col';
            th.className = 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider';
            th.textContent = header;
            headerRow.appendChild(th);
        });
        tableHead.appendChild(headerRow);

        rows.forEach(row => {
            const tr = document.createElement('tr');
            headers.forEach(header => {
                const td = document.createElement('td');
                td.className = 'px-6 py-4 whitespace-nowrap text-sm text-gray-700';
                td.textContent = row[header] !== undefined && row[header] !== null ? row[header] : '';
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });
    };
    
    /**
     * Fetches map data from the backend and plots it on Leaflet.
     */
    const plotMapData = async () => {
        try {
            const response = await fetch(`${API_URL}/map-data`);
            if (!response.ok) throw new Error('Failed to fetch map data');
            const geoData = await response.json();

            geoLayer.clearLayers();
            
            if (geoData.length === 0) {
                console.log('No geospatial data to plot.');
                return;
            }

            geoData.forEach(point => {
                L.marker([point.lat, point.lng])
                    .bindPopup(point.popup || 'A data point')
                    .addTo(geoLayer);
            });

            const bounds = L.latLngBounds(geoData.map(p => [p.lat, p.lng]));
            if (bounds.isValid()) {
                map.fitBounds(bounds, { padding: [50, 50] });
            }

        } catch (error) {
            console.error('Error plotting map data:', error);
            statusMessage.textContent = 'Error plotting map data.';
            statusMessage.className = 'text-red-600';
        }
    };

    /**
     * Fetches all data (table and map) from the backend and updates the UI.
     */
    const refreshData = async () => {
        try {
            const response = await fetch(`${API_URL}/data`);
            if (!response.ok) throw new Error('Failed to fetch tabular data');
            const { headers, rows } = await response.json();
            renderTable(headers, rows);
            await plotMapData();
        } catch (error) {
            console.error('Error refreshing data:', error);
            statusMessage.textContent = 'Could not load data from the server.';
            statusMessage.className = 'text-red-600';
        }
    };

    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const file = dataFileInput.files[0];
        if (!file) {
            statusMessage.textContent = 'Please select a file first.';
            statusMessage.className = 'text-yellow-600';
            return;
        }

        const allowedTypes = ['.csv', '.json', '.geojson'];
        const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
        if (!allowedTypes.includes(fileExtension)) {
            statusMessage.textContent = 'Invalid file type. Please upload a CSV, JSON, or GeoJSON file.';
            statusMessage.className = 'text-red-600';
            return;
        }
        
        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            statusMessage.textContent = 'File is too large. Maximum size is 5MB.';
            statusMessage.className = 'text-red-600';
            return;
        }

        const formData = new FormData();
        formData.append('dataFile', file);
        
        statusMessage.textContent = 'Uploading and processing...';
        statusMessage.className = 'text-blue-600';
        submitButton.disabled = true; // Disable button on submit
        submitButton.textContent = 'Processing...';

        try {
            const response = await fetch(`${API_URL}/upload`, {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Upload failed');
            }

            statusMessage.textContent = `Successfully processed '${result.fileName}'.`;
            statusMessage.className = 'text-green-600';
            
            await refreshData();

        } catch (error) {
            console.error('Upload error:', error);
            statusMessage.textContent = `Error: ${error.message}`;
            statusMessage.className = 'text-red-600';
        } finally {
            submitButton.disabled = false; // Re-enable button after completion
            submitButton.textContent = 'Upload and Visualize';
        }
    });

    // Initial load
    refreshData();
});

