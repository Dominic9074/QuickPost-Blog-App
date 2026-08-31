import { createContext } from "react";
import type { User } from "firebase/auth";
import type { ReactNode } from "react";

interface AuthContextType{
    user:User | null;
    loading:boolean;
    login (email:string,password:string):Promise<void>
    signup (email:string,password:string):Promise<void>
    logout():Promise<void>;
}

const AuthContext=createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps{
    children:ReactNode;
}

export function AuthProvider({children}:AuthProviderProps){

    return (
        <AuthContext.Provider value={{user:null,loading:true,async login(){},async signup(){},async logout(){}}}>
            {children}
        </AuthContext.Provider>
    )

}