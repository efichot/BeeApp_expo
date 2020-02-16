// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/7.8.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.8.2/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyBp5oFIC08_p4dH3stTTkEmGBX88Wfuk9Y",
  projectId: "beeapp2-e12d0",
  appId: "1:78138540547:web:8e4dd34a751401f6de0436",
  messagingSenderId: "78138540547"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log("Handling background message ", payload);

  return self.registration.showNotification(payload.data.title, {
    body: payload.data.body,
    icon: payload.data.icon,
    tag: payload.data.tag,
    data: payload.data.link
  });
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  event.waitUntil(self.clients.openWindow(event.notification.data));
});
