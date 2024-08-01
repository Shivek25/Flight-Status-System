# Flight Status System

## Overview

The Flight Status System is a full-stack web application that provides real-time flight status updates and notifications to passengers. It pulls data from airport systems to display current flight status, including delays, cancellations, and gate changes. Users receive notifications about flight status changes via Firebase Cloud Messaging.

## Working Site Link:
** https://flightsworld.netlify.app/ **

## Features

1. **Real-time Updates**: Display current flight status, including delays, cancellations, and gate changes.
2. **Push Notifications**: Send notifications for flight status changes via Firebase Cloud Messaging.
3. **Integration with Airport Systems**: Pull data from airport databases for accurate information using the AviationStack API.

## Tech Stack

### Frontend

- **React.js**
- **HTML**
- **CSS**

### Backend

- **Python (Flask)**
- **Firebase Admin SDK**
- **MongoDB**

### Additional Tools and Libraries

- **AviationStack API**: For fetching real-time flight data.
- **Firebase Cloud Messaging**: For sending notifications.
- **Pymongo**: For interacting with MongoDB.
- **Requests**: For making HTTP requests to the AviationStack API.

## Setup Instructions

### Prerequisites

- Node.js
- npm
- Python 3
- MongoDB

## Project Structure

Flight-Status-System/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── firebase.js
│   └── ...
│
├── frontend/
│   └── flight-status-frontend/
│       ├── public/
│       ├── src/
│       │   ├── App.js
│       │   ├── firebase.js
│       │   └── ...
│       ├── package.json
│       └── ...
│
└── README.md

## Conclusion
This project demonstrates a full-stack implementation of a real-time flight status and notification system using modern web development technologies. It integrates frontend and backend technologies seamlessly to provide an interactive user experience.
