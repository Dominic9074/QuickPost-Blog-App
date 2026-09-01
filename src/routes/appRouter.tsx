import { Route,Routes } from "react-router-dom"

import Blogs from '../pages/blogs'
import AddBlog from '../pages/addBlog'
import Login from "../pages/login"
import Signup from "../pages/signUp"
import ProtectedRoute from "./protectedRoute"

export default function AppRouter(){
    return (
            <Routes>
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/add-blog' element={<ProtectedRoute> <AddBlog /> </ProtectedRoute>} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        
    )
}





