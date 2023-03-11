import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth,onAuthStateChanged,sendEmailVerification,signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const SinginProvider = (provider) =>{
        setLoading(true)
       return signInWithPopup(auth, provider)
    }
    useEffect(()=>{
        
       const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const SingOutAuth =()=>{
        setLoading(true)
        return signOut(auth)
    }
    const CrateUser =(email,password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    const setUserIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const UpdateUserProfile = (profile)=>{
       return updateProfile(auth.currentUser,profile)
    }
    const emailVerify =()=>{
        return sendEmailVerification(auth.currentUser)
    }
    const authInfo = {
        user,
        SinginProvider,
        SingOutAuth,CrateUser,
        setUserIn,
        loading,
        UpdateUserProfile,
        emailVerify
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;