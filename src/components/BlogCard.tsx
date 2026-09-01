import type { Timestamp } from "firebase/firestore";
import "./BlogCard.css";
import { Link } from "react-router-dom";

interface BlogCardProps{
  title:string;
  content:string;
  createdAt:Timestamp;
  authorId:string;
  authorName:string;
}

export default function BlogCard({title,content,createdAt,authorName}:BlogCardProps) {

  const date= createdAt.toDate().toLocaleDateString();
  
  return (
    <article className="blog-card">
      <h2 className="blog-title">{title}</h2>

      <div className="blog-meta">
        <span className="blog-author">
          By <strong className="author-name">{authorName}</strong>
        </span>
        <span className="blog-date">{date}</span>
      </div>

      <div className="blog-divider" />

      <p className="blog-excerpt">{content}</p>

      <Link to="/blogs/1" className="read-more-link">
        Read More &rarr;
      </Link>
    </article>
  );
}