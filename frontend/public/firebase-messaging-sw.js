// Import and configure Firebase in the service worker
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js');

// Initialize Firebase in the service worker
firebase.initializeApp({
    apiKey: "AIzaSyCkslB-0zTzitfgubSyOB9F9p6nvR2ezwc",
    authDomain: "flightstatus-4f954.firebaseapp.com",
    projectId: "flightstatus-4f954",
    storageBucket: "flightstatus-4f954.appspot.com",
    messagingSenderId: "878214052668",
    appId: "1:878214052668:web:bdc94e5a4f2c7fddc7fc39",
    measurementId: "G-2F6H9BBDJ5"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
