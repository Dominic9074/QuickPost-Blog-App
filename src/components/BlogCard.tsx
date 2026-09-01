import "./BlogCard.css";
import { Link } from "react-router-dom";

export default function BlogCard() {
  return (
    <article className="blog-card">
      <h2 className="blog-title">TypeScript</h2>

      <div className="blog-meta">
        <span className="blog-author">
          By <strong className="author-name">test</strong>
        </span>
        <span className="blog-date">8/8/2026</span>
      </div>

      <div className="blog-divider" />

      <p className="blog-excerpt">
        this is a dummy data this is a dummy datathis is a dummy datathis is a dummy datathis is a dummy datathis is a dummy datathis is a dummy data
      </p>

      <Link to="/blogs/1" className="read-more-link">
        Read More &rarr;
      </Link>
    </article>
  );
}