importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyDZtYgdc4yGqiNNl6ocrCzQdUgNa69ehpc",
    authDomain: "push-notification-49cd0.firebaseapp.com",
    projectId: "push-notification-49cd0",
    storageBucket: "push-notification-49cd0.appspot.com",
    messagingSenderId: "82254894618",
    appId: "1:82254894618:web:eb7ecb79b3dd6228caa3a3"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message: ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = { body: payload.notification.body };

    self.registration.showNotification(notificationTitle, notificationOptions);
});