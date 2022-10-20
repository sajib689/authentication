import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from './../Firebase/Firebase.init';
export const AuthContext = createContext();


const auth = getAuth(app);


const UserContext = ({children}) => {
    const [user,setUser] = useState({displayName: ' Mojnu',})

    //createUserWithEmailAndPassword//
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
   //end createUserWithEmailAndPassword//
    //signInWithEmailAndPassword//
    const signIn = (email, password, name) => {
        return signInWithEmailAndPassword(auth, email, password, name
            )
    }
    //endpoint  signInWithEmailAndPassword//

    const logOut = () => {
        return signOut(auth)
    }
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    useEffect(() => {
       const unsubscride = onAuthStateChanged(auth, currentUser => {
            
        setUser(currentUser);
        

            console.log('auth state changed to ', currentUser);
        })
        return ()=> {
            unsubscride();
        }
    },[])
    ///////////////////////////////////////////////////////////////
           const authInfo = {user, createUser, signIn, logOut, signInWithGoogle}    //////////////////////

    ////////////////////////////////////////////////////////////////

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;