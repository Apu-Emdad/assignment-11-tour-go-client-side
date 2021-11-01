import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
// import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
