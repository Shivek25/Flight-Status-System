import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightStatus from './FlightStatus';
import Login from './Login';
import './App.css';
import { requestForToken, onMessageListener } from './firebase';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    useEffect(() => {
        requestForToken();

        onMessageListener()
            .then(payload => {
                console.log('Notification received: ', payload);
            })
            .catch(err => console.log('Failed to receive notification: ', err));
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={user ? <FlightStatus user={user} /> : <Login setUser={setUser} />} />
                    <Route path="/flights" element={user ? <FlightStatus user={user} /> : <Login setUser={setUser} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
