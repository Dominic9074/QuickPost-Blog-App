import { Route,Routes } from "react-router-dom"

import Blogs from '../pages/Home/BlogList'
import AddBlog from '../pages/CreateBlog/CreateBlog'
import Login from "../pages/login/login"
import Signup from "../pages/SignUp/signUp"
import ProtectedRoute from "./protectedRoute"
import MyBlog from "../pages/myblog/MyBlog"

export default function AppRouter(){
    return (
            <Routes>
                <Route path='/' element={<Blogs />} />
                <Route path='/add-blog' element={<ProtectedRoute> <AddBlog /> </ProtectedRoute>} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/my-blogs' element={<MyBlog />} />
            </Routes>
    )
}





