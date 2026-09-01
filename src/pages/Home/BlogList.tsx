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
            {blogs.map((blog)=><BlogCard title={blog.title} content={blog.content} authorName={blog.authorName}
            createdAt={blog.createdAt} authorId={blog.authorId} />)}
            </div>

            {/* Pagination */}
            <div className="pagination-container">
            <button className="page-btn nav-arrow" disabled>
                &lt; Previous
            </button>
            <button className="page-btn page-number active">1</button>
            <button className="page-btn page-number">2</button>
            <button className="page-btn nav-arrow">Next &gt;</button>
            </div>
        </main>

        {/* Footer */}
        <footer className="blogs-footer">
            <div className="footer-inner">
            <h2 className="footer-logo">Quick Post</h2>
            <div className="footer-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#contact">Contact</a>
            </div>
            <p className="footer-copyright">
                &copy; 2026 The Editorial. All rights reserved.
            </p>
            </div>
        </footer>
        </div>
        </>
    )
}



