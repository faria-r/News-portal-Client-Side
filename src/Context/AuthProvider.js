import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.config'
export const AuthContext= createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    //set state for get user
   const [ user,setUser] = useState(null);

   const [loading,setLoading] = useState(true);
//set observer for observe the currently signed in user
useEffect(()=>{
const unSubscribe = onAuthStateChanged(auth, currentUser =>{
    console.log('user inside state', currentUser);
    if(currentUser===null || currentUser.emailVerified){
        setUser(currentUser);
    }
    
    setLoading(false);
});
return ()=> unSubscribe();

},[])

const logOut = ()=>{
    setLoading(true);
    return signOut(auth);
}
const providerLogIn = (provider)=>{
    setLoading(true);
return signInWithPopup(auth,provider)
};

const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
    
}
const verifyEmail = ()=>{
    return sendEmailVerification(auth.currentUser)
}

const updateUserProfile = (profile) => {
return updateProfile(auth.currentUser,profile);
}

const logIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
}

    const authInfo = {user,
        providerLogIn,
        logIn,
        logOut,
        createUser,
        loading,
        updateUserProfile,
        setLoading,
    verifyEmail}
    return (
        <AuthContext.Provider value={authInfo}>
{children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;