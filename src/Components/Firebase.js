import firebase from 'firebase';

 const firebaseConfig = {
    apiKey: "AIzaSyCBHl17od6E09oN8f6T6xrBWYzuZV13vLI",
    authDomain: "slack-clone-e2255.firebaseapp.com",
    databaseURL: "https://slack-clone-e2255.firebaseio.com",
    projectId: "slack-clone-e2255",
    storageBucket: "slack-clone-e2255.appspot.com",
    messagingSenderId: "87727794916",
    appId: "1:87727794916:web:0def9d09feb1110edfdaf1",
    measurementId: "G-Y3YGP1X6ZB"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new  firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;