import { Route,Routes } from "react-router-dom"

import Blogs from '../pages/Home/BlogList'
import AddBlog from '../pages/CreateBlog/CreateBlog'
import Login from "../pages/login/login"
import Signup from "../pages/signup/signUp"
import ProtectedRoute from "./protectedRoute"
import MyBlog from "../pages/myblog/MyBlog"
import SingleBlog from "../pages/blog/SingleBlog"
import PublicRoute from "./PublicRoute"

export default function AppRouter(){
    return (
            <Routes>
                <Route path='/' element={<Blogs />} />
                <Route path='/add-blog' element={<ProtectedRoute> <AddBlog /> </ProtectedRoute>} />
                <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
                <Route path='/signup' element={<PublicRoute><Signup /></PublicRoute>} />
                <Route path='/my-blogs' element={<ProtectedRoute> <MyBlog /> </ProtectedRoute>} />
                <Route path='/edit-blog/:id' element={<ProtectedRoute><AddBlog /></ProtectedRoute>} />
                <Route path='/blog/:id' element={<SingleBlog />} />
            </Routes>
    )
}





