/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

const AuthProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [isLoading,setLoading] = useState(true)

  const creatUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser=>{
      setUser(currentUser)
      setLoading(false)
    }))
    return ()=> unsubscribe()
  }),[]

  const authentications = {
    user,
    creatUser,
    signin,
  };
  return <div>
   <AuthContext.Provider value={authentications}>
   {children}
   </AuthContext.Provider>
  </div>;
};

export default AuthProvider;
