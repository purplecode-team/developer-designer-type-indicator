import firebase from './firebase';

export const loadData = async (key) => {
  const snapshot = await firebase.database().ref(key).once('value');
  return snapshot.val();
};

export const updateData = async (key, data) => {
  const updates = {};
  updates[key] = data;
  return await firebase.database().ref().update(updates);
};
