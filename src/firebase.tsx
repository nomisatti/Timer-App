import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBpgeBE9zx0Ts2AtKrG7yd7gWz0-Z6tzKs",
    authDomain: "timer-app-b1698.firebaseapp.com",
    databaseURL: "https://timer-app-b1698.firebaseio.com",
    projectId: "timer-app-b1698",
    storageBucket: "timer-app-b1698.appspot.com",
    messagingSenderId: "578732113015",
    appId: "1:578732113015:web:9d089257c5937937245a72"
}

firebase.initializeApp(config)

export default firebase;