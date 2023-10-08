import { createContext, useState } from "react";
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

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
