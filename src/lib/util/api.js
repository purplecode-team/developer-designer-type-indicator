import firebase from './firebase';

export const loadDevCount = () => {
  const ref = firebase.database().ref('devCount');
  ref.once('value', (snapshot) => {
    console.log(snapshot.val());
  });
};
