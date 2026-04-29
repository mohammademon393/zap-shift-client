import React from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    // register user
    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign user 
    const signUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google sign in
    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = {
        registerUser,
        signUser,
        googleSignIn,

    }

    return (
        <AuthContext value={authInfo}>
            {children}  
        </AuthContext>
    );
};

export default AuthProvider;