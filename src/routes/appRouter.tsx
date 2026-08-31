import { Route,Routes } from "react-router-dom"

import Blogs from '../pages/blogs'
import AddBlog from '../pages/addBlog'
import Login from "../pages/login"
import Signup from "../pages/signUp"

export default function AppRouter(){
    return (
            <Routes>
                <Route path='/blog' element={<Blogs />} />
                <Route path='/add-blog' element={<AddBlog />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        
    )
}





