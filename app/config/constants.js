import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBIDh6iOedSzluEA5Co5Fj0DfnmbZfJieQ",
    authDomain: "duckr-17474.firebaseapp.com",
    databaseURL: "https://duckr-17474.firebaseio.com",
    projectId: "duckr-17474",
    storageBucket: "duckr-17474.appspot.com",
    messagingSenderId: "748697162699"
};
firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
