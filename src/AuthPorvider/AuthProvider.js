import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

    const SinginProvider = (provider) =>{
       return signInWithPopup(auth, provider)
    }
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const SingOutAuth =()=>{
        return signOut(auth)
    }
    const CrateUser =(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    const setUserIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {user,SinginProvider,SingOutAuth,CrateUser,setUserIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;