import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyCkslB-0zTzitfgubSyOB9F9p6nvR2ezwc",
    authDomain: "flightstatus-4f954.firebaseapp.com",
    projectId: "flightstatus-4f954",
    storageBucket: "flightstatus-4f954.appspot.com",
    messagingSenderId: "878214052668",
    appId: "1:878214052668:web:bdc94e5a4f2c7fddc7fc39",
    measurementId: "G-2F6H9BBDJ5"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const requestForToken = async () => {
    try {
        const token = await messaging.getToken({ vapidKey: 'BHmy972iLhFaW2Aki7G7uxmXVtYdNCQGWD8hyNsDcuBQfWTpS0wU5NeRQcz30iD1DlUtyfW6zfm9PVMpEWP6yT4' });
        if (token) {
            console.log('Token:', token);
        } else {
            console.log('No registration token available.');
        }
    } catch (error) {
        console.error('Error fetching token:', error);
    }
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            console.log('Message received:', payload);
            resolve(payload);
        });
    });
