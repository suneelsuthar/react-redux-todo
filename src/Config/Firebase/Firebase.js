
 import firebase from 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyC2OqiBRsH-ZdrO49jozb1d2piTwCRBpEM",
    authDomain: "todo-react-redux-6cde0.firebaseapp.com",
    databaseURL: "https://todo-react-redux-6cde0.firebaseio.com",
    projectId: "todo-react-redux-6cde0",
    storageBucket: "todo-react-redux-6cde0.appspot.com",
    messagingSenderId: "383608480951",
    appId: "1:383608480951:web:1cb68b3a7d463500fad932"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);
