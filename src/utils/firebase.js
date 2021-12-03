import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0BysuLj2YqnHiLuOg-cDd0pKq0NfVw9M",
    authDomain: "shop-30a78.firebaseapp.com",
    projectId: "shop-30a78",
    storageBucket: "shop-30a78.appspot.com",
    messagingSenderId: "570417991291",
    appId: "1:570417991291:web:a70a1463888e2273345cde",
    measurementId: "G-302WXJ6YV2"
  };

 firebase.initializeApp(firebaseConfig);

 const storage=firebase.storage();

 export {storage,firebase as default}