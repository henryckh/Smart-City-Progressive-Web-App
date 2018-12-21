importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

// replace with your own credential
var config = {
	apiKey: "AIzaSyCqsyuHy_vnwlyfd22L_kH-SlOZr1VINzc",
	authDomain: "smart-city-pwa.firebaseapp.com",
	databaseURL: "https://smart-city-pwa.firebaseio.com",
	projectId: "smart-city-pwa",
	storageBucket: "smart-city-pwa.appspot.com",
	messagingSenderId: "1043678624818"
  };
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	const title = 'Welcome to smart city!';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});