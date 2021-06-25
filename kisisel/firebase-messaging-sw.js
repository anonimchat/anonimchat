// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js');

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB5QLL1mz6Dq5VmD6kw6QFwfuFzDMOaEWs",
    authDomain: "tiktok2chat.firebaseapp.com",
    databaseURL: "https://tiktok2chat-default-rtdb.firebaseio.com",
    projectId: "tiktok2chat",
    storageBucket: "tiktok2chat.appspot.com",
    messagingSenderId: "599240267160",
    appId: "1:599240267160:web:e48b63584e573257b007ed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});