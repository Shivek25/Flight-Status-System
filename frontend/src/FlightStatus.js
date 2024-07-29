import React, { useState, useEffect } from 'react';

const FlightStatus = () => {
    const [flightStatus, setFlightStatus] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch flight status from backend API
        fetch('/api/flight-status')
            .then(response => response.json())
            .then(data => {
                setFlightStatus(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Flight Status</h1>
            {flightStatus.error ? (
                <p>{flightStatus.error}</p>
            ) : (
                <>
                    <p>Status: {flightStatus.status || 'N/A'}</p>
                    <p>Gate: {flightStatus.gate || 'N/A'}</p>
                    <p>Departure Airport: {flightStatus.departure_airport || 'N/A'}</p>
                    <p>Arrival Airport: {flightStatus.arrival_airport || 'N/A'}</p>
                    <p>Departure Time: {new Date(flightStatus.departure_time).toLocaleString() || 'N/A'}</p>
                    <p>Arrival Time: {new Date(flightStatus.arrival_time).toLocaleString() || 'N/A'}</p>
                </>
            )}
        </div>
    );
};

export default FlightStatus;
