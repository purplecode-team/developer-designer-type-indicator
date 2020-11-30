import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCa6almDKLeWHEBmB57A6w1kg1-fNMQgIw',
  authDomain: 'personality-test-f5c38.firebaseapp.com',
  databaseURL: 'https://personality-test-f5c38.firebaseio.com',
  projectId: 'personality-test-f5c38',
  storageBucket: 'personality-test-f5c38.appspot.com',
  messagingSenderId: '569160741913',
  appId: '1:569160741913:web:ce3f67d237ad185773a688',
  measurementId: 'G-D1QYKNSZC3',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
