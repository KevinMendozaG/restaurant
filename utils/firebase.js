import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDgNfDherQZU41PbgGrObuJT9P1oZ44eEQ",
    authDomain: "restaurants-52050.firebaseapp.com",
    projectId: "restaurants-52050",
    storageBucket: "restaurants-52050.appspot.com",
    messagingSenderId: "711355621123",
    appId: "1:711355621123:web:937b95ecf7114aea5f5336"
  }


  export const firebaseApp = firebase.initializeApp(firebaseConfig)