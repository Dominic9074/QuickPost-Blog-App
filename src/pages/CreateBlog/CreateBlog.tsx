import { useForm } from "react-hook-form";
import "./CreateBlog.css";
import { createBlog } from "../../services/blogServices";
import useAuth from "../../hooks/userAuth";
import { toast } from "react-toastify";

interface BlogFormData{
    title:string;
    content:string;
}

export default function CreateBlog() {

  const {register,handleSubmit,formState:{errors}}=useForm<BlogFormData>();
  const {user}=useAuth()

  async function handleCreateBlog(data:BlogFormData){
    if(!user){
      console.log('user not logged in');
      return;
    }
    try{
      await createBlog(data.title,data.content,user.uid)
      toast.success('blog created successfully')
    }catch(error){
      toast.error('Error creating blog')
    }
  }

  return (
    <div className="create-blog-container">
      <div className="create-blog-card">
        <div className="create-blog-header">
          <h2>Create New <span className="highlight">Post</span></h2>
          <p>Share your ideas, thoughts, or stories with the community</p>
        </div>

        <form className="create-blog-form" onSubmit={handleSubmit(handleCreateBlog)} >
          <div className="form-group">
            <label htmlFor="title">Post Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter an engaging title..."
              autoComplete="off"
              {...register('title',{
                required:'title is required',
                minLength:{value:3,message:'title should be at least 3 character'}
              })}
            />
            {errors.title &&(
                <p style={{color: "#e74c3c",fontSize: "12px",margin: "5px 0 0"}}>{errors.title.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              rows={12}
              placeholder="Write your story here..."
              {...register('content',{
                required:'content is required',
                minLength:{value:20,message:'title should be at least 3 character'}
              })}
            />
            {errors.content &&(
                <p style={{color: "#e74c3c",fontSize: "12px",margin: "5px 0 0"}}>{errors.content.message}</p>
            )}
          </div>

          <div className="create-blog-actions">
            <button type="button" className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}