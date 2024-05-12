import { createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../../firebase/firebase.config';
import { GoogleAuthProvider,signInWithPopup,updateProfile} from "firebase/auth";

export const AuthContext= new createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children})=> {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const [reload, setReload] = useState(false);

    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{setUser(currentUser);setLoading(false)});
        return ()=>{unSubscribe()};
        
    },[reload])


    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password); 
    }

    const updateUserProfile=(name, image)=>{
        setLoading(true);
        // setReload(true);
            return updateProfile(auth.currentUser,{displayName:name,photoURL:image})
    }

    const signInUser =(email,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogin= ()=>{
        setLoading(true);
       return signInWithPopup(auth, googleProvider);
    };

    const logOut = ()=>{setLoading(true); return signOut(auth);}

    
    const authInfo = {user,createUser,signInUser,logOut,googleLogin,updateUserProfile,loading,setReload}
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
}

export default AuthProvider