# smart-city-pwa

This is a super simple hello world progressive web app (PWA) deployed with Firebase,
with firebase included.

## Prerequisites

You should have your firebase project created.  
And installed nodejs and firebase-tools.

- [node](https://nodejs.org/en/download/)
- firebase-tools

firebase-tools can be installed via if you have `node` installed

```sh
npm install -g firebase-tools
```

## Smart City Information

You can get the hong kong City information with this link  
[https://data.gov.hk/en/](https://data.gov.hk/en/)  
It is time to build your own PWA based on these public data.  

## Firebase Settings

Replace the firebase setting config with yours.
You can have the tutorial [here].(https://www.youtube.com/watch?time_continue=1&v=k1D0_wFlXgo)

Replace the firebase setting with yours in `index.html`  

```js
    // Initialize Firebase
    // Replace with your own credential
    var config = {
    apiKey: "YOUR_FIREBASE_CONFIG",
    authDomain: "YOUR_FIREBASE_CONFIG",
    databaseURL: "YOUR_FIREBASE_CONFIG",
    projectId: "YOUR_FIREBASE_CONFIG",
    storageBucket: "YOUR_FIREBASE_CONFIG",
    messagingSenderId: "YOUR_FIREBASE_CONFIG"
    };
    firebase.initializeApp(config);
```

Replace the firebase setting with yours in `firebase-messaging-sw.html`

```js
// replace with your own credential
var config = {
    apiKey: "YOUR_FIREBASE_CONFIG",
    authDomain: "YOUR_FIREBASE_CONFIG",
    databaseURL: "YOUR_FIREBASE_CONFIG",
    projectId: "YOUR_FIREBASE_CONFIG",
    storageBucket: "YOUR_FIREBASE_CONFIG",
    messagingSenderId: "YOUR_FIREBASE_CONFIG"
};
firebase.initializeApp(config);
```

## Deploy with firebase

Login firebase with commands

```sh
firebase login
```

And deploy your project with your project ID <YOUR_PROJECT_NAME>

```sh
firebase deploy --project=<YOUR_PROJECT_NAME>
```

## Futher More

You can build your PWA via framework such as Vue.js, React or Angular.