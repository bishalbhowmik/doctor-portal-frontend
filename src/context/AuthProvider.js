import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,signInWithPopup,signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('');
    const [loader,setLoader] = useState(true);

    const googleProvider = new GoogleAuthProvider();
  


    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) =>{
        setLoader(true);
        return updateProfile(auth.currentUser, userInfo);
    }
    

    const logOut = () =>{
        setLoader(true);
        return signOut (auth);
    }

  
   

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change');
            setUser(currentUser);
            setLoader(false);

        });


        return ()=> unsubscribe();
    }, [])

    const signUpWithGoogle =() =>{
        return signInWithPopup(auth,googleProvider);
    }



    const authInfo = {
        createUser,
        signIn,
        logOut,
        loader,
        updateUser,
        signUpWithGoogle,
        user
    }


    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;