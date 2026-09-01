import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCard";
import "./MyBlog.css";
import type BlogInterface from "../../types/blog";
import { useEffect, useState } from "react";
import { getMyBlogs } from "../../services/blogServices";
import useAuth from "../../hooks/userAuth";

export default function MyBlogs() {

    const [blogs,setBlogs]=useState<BlogInterface[]>([])
    const {user}=useAuth()

    useEffect(()=>{
        if(!user){
            return;
        }
        const fetchData=async ()=>{
            const data=await getMyBlogs(user.uid);
            setBlogs(data)
        }
        fetchData()
    })

  return (
    <>
      <div className="myblogs-container">
        <main className="myblogs-content">
          {/* Top Bar with Back Button & Action */}
          <div className="myblogs-top-bar">
            <Link to="/" className="back-link">
              &larr; Back to Home
            </Link>
            <Link to="/add-blog" className="create-shortcut-btn">
              + Write New Post
            </Link>
          </div>

          {/* Heading Section */}
          <header className="myblogs-header">
            <h1 className="myblogs-title">
              My <span className="highlight">Blogs</span>
            </h1>
            <p className="myblogs-subtitle">
              Manage, edit, and review your published articles.
            </p>
          </header>

          {/* 3-Column Grid of Blog Cards */}
          <div className="myblogs-grid">
            {blogs.map((blog)=><BlogCard canModify={true} title={blog.title} content={blog.content} authorName={blog.authorName}
            createdAt={blog.createdAt} authorId={blog.authorId} />)}
          </div>
        </main>
      </div>
    </>
  );
}