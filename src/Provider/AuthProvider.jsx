import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from "../Firebase/firebase.config"
import { GoogleAuthProvider } from "firebase/auth"
 export const AuthContext = createContext()
  const auth = getAuth(app) 

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
// console.log(user);

const [loading,setLoading] = useState(true)
const handleGoogleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;  // User details from Firebase
        setUser(user);  // Optionally store the user in your state or context
        console.log("Google Login successful:", user);
    } catch (error) {
        console.error("Google Login Error:", error.message);
    }
};


const provider = new GoogleAuthProvider()

    const createNewuser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const userLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    
    const updateUserProfile =(updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }

    useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        setUser,
        createNewuser,
        logOut,
        userLogin,
        loading,
        updateUserProfile ,
        provider,
        handleGoogleLogin
    }

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;