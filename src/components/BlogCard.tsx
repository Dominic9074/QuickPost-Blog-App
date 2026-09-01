import type { Timestamp } from "firebase/firestore";
import "./BlogCard.css";
import { Link, useNavigate } from "react-router-dom";
import { deleteBlog } from "../services/blogServices";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

interface BlogCardProps{
  id:string;
  title:string;
  content:string;
  createdAt:Timestamp;
  authorId:string;
  authorName:string;
  canModify?:boolean;
}

export default function BlogCard({title,content,createdAt,authorName,canModify,id}:BlogCardProps) {

  const date= createdAt.toDate().toLocaleDateString();
  const navigate=useNavigate()

  async function handleDelete(id:string){
      const result = await Swal.fire({
      title: "Delete this blog?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc2626",
    });

    if (!result.isConfirmed) return;

    try{
      await deleteBlog(id);
      toast.success('deleted successfully')
    }catch(error){
      toast.error('failed to delete')
      console.log(error)
    }
  }
  
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
       {canModify && (
          <div className="blog-actions">
            <button className="edit-btn" onClick={()=>navigate(`/edit-blog/${id}`)} >Edit</button>
            <button className="delete-btn" onClick={()=>handleDelete(id)} >Delete</button>
          </div>
        )}
    </article>
  );
}