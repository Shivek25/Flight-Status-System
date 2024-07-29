import React, { useState, useEffect } from 'react';
import './App.css';
import { requestForToken, onMessageListener } from './firebase';

function App() {
    const [flights, setFlights] = useState([]);
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        requestForToken();

        onMessageListener()
            .then(payload => {
                console.log('Notification received: ', payload);
                setNotification(payload);
            })
            .catch(err => console.log('Failed to receive notification: ', err));

        fetch('/api/flight-status')
            .then(response => response.json())
            .then(data => setFlights(data))
            .catch(error => console.error('Error fetching flight status:', error));
    }, []);

    return (
        <div className="App">
            <h1>Flight Status System</h1>
            {notification && (
                <div className="notification">
                    <h2>Notification</h2>
                    <p>{notification.notification.title}</p>
                    <p>{notification.notification.body}</p>
                </div>
            )}
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
    );
}

export default App;
