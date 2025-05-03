import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase.init';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const createUser = ( email,  password ) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, currentUser=>{
           setUser(currentUser); 
           setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    })

    const authInfo =  {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInGoogle

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;