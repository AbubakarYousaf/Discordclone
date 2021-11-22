import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAgWVDXT2uLLVzQJcgU1WddxjCiNGXDw64",
  authDomain: "discord-by-abubakar.firebaseapp.com",
  projectId: "discord-by-abubakar",
  storageBucket: "discord-by-abubakar.appspot.com",
  messagingSenderId: "414256971417",
  appId: "1:414256971417:web:949db86e8f0761acba4208",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
