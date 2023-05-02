import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/Firebase';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const user = { name: "Rpfiq" }


    // login with google 
    
    const loginWithGoogle = (googleProvider) => {
      return signInWithPopup(auth,googleProvider)
          
    }
  // login with github 
  const loginWithGithub = (googleProvider) => {
    return signInWithPopup(auth,googleProvider)
        
  }

//   registration user 

const registrationUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}



    const userInfo = {
        user,
        loginWithGoogle,
        loginWithGithub,
        registrationUser
    }




    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;