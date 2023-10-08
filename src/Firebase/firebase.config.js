import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAcUAIDoZ6azrkTv-awMcyHQTQ2-XEYeA",
  authDomain: "rhythmfest-46a3a.firebaseapp.com",
  projectId: "rhythmfest-46a3a",
  storageBucket: "rhythmfest-46a3a.appspot.com",
  messagingSenderId: "284665778366",
  appId: "1:284665778366:web:9d05f28b21f70e41b60eef",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
