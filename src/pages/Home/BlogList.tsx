import Navbar from "../../components/Navbar"
import BlogCard from "../../components/BlogCard"
import './BlogList.css'
import { getBlogs } from "../../services/blogServices"
import {useEffect, useState} from 'react'
import type BlogInterface from "../../types/blog"

export default function Blogs(){

    const [blogs,setBlogs]=useState<BlogInterface[]>([])

    useEffect(()=>{
        const fetchBlogs=async ()=>{
            const data=await getBlogs()
            setBlogs(data)
        }
        fetchBlogs()
    },[])

    return (
        <>
        <Navbar />
        <div className="blogs-page-container">
        <main className="blogs-main-content">
            <h1 className="blogs-page-title">All Blogs</h1>

            {/* 3-Column Blog Cards Grid */}
            <div className="blogs-grid">
            {blogs.map((blog)=><BlogCard canModify={false} title={blog.title} content={blog.content} authorName={blog.authorName}
            createdAt={blog.createdAt} authorId={blog.authorId} id={blog.id} />)}
            </div>

        </main>

        
        </div>
        </>
    )
}



