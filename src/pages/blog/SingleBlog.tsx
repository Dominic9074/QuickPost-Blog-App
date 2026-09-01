import { Link, useParams } from "react-router-dom";
import "./SingleBlog.css";
import { useEffect, useState } from "react";
import type BlogInterface from "../../types/blog";
import { getBlogById } from "../../services/blogServices";

export default function SingleBlog() {

  const {id}=useParams();
  const [blog,setBlog]=useState<BlogInterface |null>()

  useEffect(()=>{
    if(!id){
      return
    }

    const fetchBlogData=async ()=>{
      const data=await getBlogById(id);
      setBlog(data)
    }

    fetchBlogData()

  })

  return (
    <>
      <div className="single-blog-wrapper">
        <main className="single-blog-container">
          {/* Back Navigation */}
          <div className="single-blog-nav">
            <Link to="/" className="back-link">
              &larr; Back to Home
            </Link>
          </div>

          <article className="single-blog-card">
            {/* Header Section */}
            <header className="single-blog-header">
              <span className="blog-badge">Article</span>
              <h1 className="single-blog-title">
                {blog && blog.title}
              </h1>

              <div className="single-blog-meta">
                <div className="author-info">
                  <span className="meta-label">Written by</span>
                  <strong className="author-name">{blog && blog.authorName}</strong>
                </div>
                <div className="date-info">
                  <span className="meta-label">Published on</span>
                  <time className="published-date">{blog && blog.createdAt.toDate().toLocaleDateString()}</time>
                </div>
              </div>
            </header>

            <div className="single-blog-divider" />

            {/* Content Area */}
            <div className="single-blog-content">
              <p>
               {blog && blog.content}
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}