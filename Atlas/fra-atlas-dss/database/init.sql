CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE IF NOT EXISTS fra_claims (
    id SERIAL PRIMARY KEY,
    claimant_name VARCHAR(255) NOT NULL,
    village VARCHAR(255) NOT NULL,
    district VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    claim_type VARCHAR(50) CHECK (claim_type IN ('IFR', 'CR', 'CFR')),
    claim_status VARCHAR(50) CHECK (claim_status IN ('filed', 'approved', 'pending')),
    area_hectares FLOAT NOT NULL,
    geom GEOMETRY(POLYGON, 4326) NOT NULL
);

CREATE TABLE IF NOT EXISTS assets (
    id SERIAL PRIMARY KEY,
    asset_type VARCHAR(255) NOT NULL,
    classification VARCHAR(255) NOT NULL,
    geom GEOMETRY(POLYGON, 4326) NOT NULL
);

CREATE TABLE IF NOT EXISTS recommendations (
    id SERIAL PRIMARY KEY,
    village VARCHAR(255) NOT NULL,
    recommendation TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);