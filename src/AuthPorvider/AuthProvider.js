import React, { createContext, useEffect, useState } from 'react';
import { getAuth,onAuthStateChanged,signInWithPopup, signOut } from "firebase/auth";
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
            console.log("user inside login ",currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const SingOutAuth =()=>{
        return signOut(auth)
    }

    const authInfo = {user,SinginProvider,SingOutAuth}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;