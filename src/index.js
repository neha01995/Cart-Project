import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import 'firebase/firestore' ;

const firebaseConfig = {
  apiKey: "AIzaSyAIeX71GQLDrvlquPXHYfRQ1rHz3l-iUUo",
  authDomain: "cart-21b36.firebaseapp.com",
  databaseURL: "https://cart-21b36.firebaseio.com",
  projectId: "cart-21b36",
  storageBucket: "cart-21b36.appspot.com",
  messagingSenderId: "125516453078",
  appId: "1:125516453078:web:fdffd6325d6a888df42577"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();


