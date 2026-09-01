import { Route,Routes } from "react-router-dom"

import Blogs from '../pages/Home/blogs'
import AddBlog from '../pages/CreateBlog/CreateBlog'
import Login from "../pages/login/login"
import Signup from "../pages/SignUp/signUp"
import ProtectedRoute from "./protectedRoute"

export default function AppRouter(){
    return (
            <Routes>
                <Route path='/' element={<Blogs />} />
                <Route path='/add-blog' element={<ProtectedRoute> <AddBlog /> </ProtectedRoute>} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        
    )
}





