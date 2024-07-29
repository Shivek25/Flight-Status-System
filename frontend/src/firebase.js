import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkslB-0zTzitfgubSyOB9F9p6nvR2ezwc",
    authDomain: "flightstatus-4f954.firebaseapp.com",
    projectId: "flightstatus-4f954",
    storageBucket: "flightstatus-4f954.appspot.com",
    messagingSenderId: "878214052668",
    appId: "1:878214052668:web:bdc94e5a4f2c7fddc7fc39",
    measurementId: "G-2F6H9BBDJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

// Function to request notification permission and get the token
export const requestForToken = () => {
    return getToken(messaging, { vapidKey: 'BHmy972iLhFaW2Aki7G7uxmXVtYdNCQGWD8hyNsDcuBQfWTpS0wU5NeRQcz30iD1DlUtyfW6zfm9PVMpEWP6yT4' })
        .then((currentToken) => {
            if (currentToken) {
                console.log('Current token for client: ', currentToken);
            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
};

// Function to handle incoming messages
export const onMessageListener = () => {
    return new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });
};
