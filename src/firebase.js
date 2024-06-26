import { initializeApp } from 'firebase/app';
import { getToken, getMessaging, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyDZtYgdc4yGqiNNl6ocrCzQdUgNa69ehpc",
    authDomain: "push-notification-49cd0.firebaseapp.com",
    projectId: "push-notification-49cd0",
    storageBucket: "push-notification-49cd0.appspot.com",
    messagingSenderId: "82254894618",
    appId: "1:82254894618:web:eb7ecb79b3dd6228caa3a3"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getOrRegisterServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        return window.navigator.serviceWorker
            .getRegistration('/firebase-push-notification-scope')
            .then((serviceWorker) => {
                if (serviceWorker) return serviceWorker;
                return window.navigator.serviceWorker.register('/firebase-messaging-sw.js', {
                    scope: '/firebase-push-notification-scope',
                });
            });
    }
    throw new Error('The browser doesn`t support service worker.');
};

export const getFirebaseToken = () =>
    getOrRegisterServiceWorker()
        .then((serviceWorkerRegistration) =>
            getToken(messaging, { vapidKey: 'f94acmq2yPxVhH0jaDLj1RZFcIdpS--wE1dRC1K8SH8', serviceWorkerRegistration }));

export const onForegroundMessage = () =>
    new Promise((resolve) => onMessage(messaging, (payload) => resolve(payload)));
