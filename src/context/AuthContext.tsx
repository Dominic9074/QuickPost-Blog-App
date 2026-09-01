import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, type User ,createUserWithEmailAndPassword,signInWithEmailAndPassword,
    signOut, updateProfile} from "firebase/auth";
import type { ReactNode } from "react";
import {auth} from '../firebase/firebase'

interface AuthContextType{
    user:User | null;
    loading:boolean;
    login (email:string,password:string):Promise<void>
    signup (email:string,password:string,name:string):Promise<void>
    logout():Promise<void>;
}

export const AuthContext=createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps{
    children:ReactNode;
}

export function AuthProvider({children}:AuthProviderProps){

    const [user,setUser]=useState<User | null>(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        });
        return unsubscribe
    },[])

    const login=async (email:string,password:string)=>{
        await signInWithEmailAndPassword(auth,email,password)
    }

    const signup=async (email:string,password:string,name:string)=>{
        const result=await createUserWithEmailAndPassword(auth,email,password)
        await updateProfile(result.user,{displayName:name})
    }

    const logout=async ()=>{
        await signOut(auth)
    };

    return (
        <AuthContext.Provider value={{user,loading, login,signup,logout}}>
            {children}
        </AuthContext.Provider>
    )

}