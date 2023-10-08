/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);

  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const siginIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = (googleAuthProvider) => {
    return signInWithPopup(auth, googleAuthProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }),
    [];

  const authentications = {
    user,
    creatUser,
    siginIn,
    googleSignIn,
    isLoading
  };
  return (
    <div>
      <AuthContext.Provider value={authentications}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
