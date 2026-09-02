import {Navigate} from 'react-router-dom'
import useAuth from '../hooks/userAuth'
import type { ReactNode } from 'react';
import Loader from '../components/Loader';

interface ProtectedRouteProps{
    children:ReactNode;
}

export default function ProtectedRoute({children}:ProtectedRouteProps){
        const { user, loading } = useAuth();

        if (loading) {
            return <Loader/>;
        }

        if (!user) {
            return <Navigate to="/login" replace />;
        }

        return children;
}

