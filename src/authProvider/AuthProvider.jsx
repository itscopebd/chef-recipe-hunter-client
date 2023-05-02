import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/Firebase';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null)
    const [loading,setLoading]=useState(true)
    const auth = getAuth(app);
  
    // login with google 

    const loginWithGoogle = (googleProvider) => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    // login with github 
    const loginWithGithub = (googleProvider) => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    //   registration user 

    const registrationUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login with email and password 


    const logInwithEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user Profile 

    const updateUser=(user,updateData)=>{
        return updateProfile(user,updateData)
    }






    const userInfo = {
        user,
        loginWithGoogle,
        loginWithGithub,
        registrationUser,
        logInwithEmailPassword,
        updateUser
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (logInUser) => {
            setUser(logInUser)
            setLoading(false)
        })
        return () => {

            unsuscribe();
        }
    }, [])


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;