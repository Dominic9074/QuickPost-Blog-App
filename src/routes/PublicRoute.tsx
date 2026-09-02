import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import useAuth from "../hooks/userAuth";
import {type ReactNode } from "react";

interface PublicRouteProps{
    children:ReactNode;
}

export default function PublicRoute({children}:PublicRouteProps){
    const {user,loading}=useAuth();

    if(loading){
        return <Loader />
    }

    if(user){
        return <Navigate to='/' replace />
    }
    return children

}



