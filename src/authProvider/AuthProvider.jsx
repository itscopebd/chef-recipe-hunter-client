import React, { createContext } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/Firebase';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const user = { name: "Rpfiq" }


    // login with google 
    
    const loginWithGoogle = (googleProvider) => {
      return signInWithPopup(auth,googleProvider)
          
    }


    const userInfo = {
        user,
        loginWithGoogle
    }




    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;