import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FlightStatus = ({ user }) => {
    const [flights, setFlights] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/api/flight-status')
            .then(response => response.json())
            .then(data => setFlights(data))
            .catch(error => console.error('Error fetching flight status:', error));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user'); 
        navigate('/'); // Navigate back to login page
        window.location.reload();
    };

    return (
        <div className="flight-status">
            <h1>Flight-Status-System</h1>
            <h2 className='Welcome'>Welcome, {user.name}</h2>
            <button onClick={handleLogout}>Logout</button>
            <div className="flights">
                {flights.length > 0 ? (
                    flights.map((flight, index) => (
                        <div key={index} className="flight">
                            <h2>Flight Status</h2>
                            <p><strong>Status:</strong> {flight.flight_status}</p>
                            <p><strong>Gate:</strong> {flight.departure.gate}</p>
                            <p><strong>Departure Airport:</strong> {flight.departure.airport}</p>
                            <p><strong>Arrival Airport:</strong> {flight.arrival.airport}</p>
                            <p><strong>Departure Time:</strong> {flight.departure.scheduled}</p>
                            <p><strong>Arrival Time:</strong> {flight.arrival.scheduled}</p>
                        </div>
                    ))
                ) : (
                    <p>No flight data available</p>
                )}
            </div>
        </div>
    );
};

export default FlightStatus;
