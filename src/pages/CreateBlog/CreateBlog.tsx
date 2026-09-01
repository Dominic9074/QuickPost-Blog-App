import { useForm } from "react-hook-form";
import "./CreateBlog.css";
import { createBlog, getBlogById, updateBlog } from "../../services/blogServices";
import useAuth from "../../hooks/userAuth";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


interface BlogFormData{
    title:string;
    content:string;
}

export default function CreateBlog() {

  const {register,handleSubmit,reset,formState:{errors}}=useForm<BlogFormData>();
  const {user}=useAuth()
  const navigate=useNavigate()
  const {id}=useParams()

  useEffect(()=>{
    if(!id) return;

    const fetchBlogData=async ()=>{
      try{
        const blog=await getBlogById(id)

      if (!blog) {
        toast.error("Blog not found");
        navigate("/");
        return;
      }

      reset({
        title: blog.title,
        content: blog.content,
      });
      } catch(error) {
        toast.error("Error loading blog");
      }

    }

    fetchBlogData()

  },[id,reset,navigate])

  async function handleCreateBlog(data:BlogFormData){
    if(!user){
      console.log('user not logged in');
      return;
    }
    try{

      if(id){
        await updateBlog(id, data.title, data.content);

        toast.success("Blog updated successfully");
        navigate('/my-blogs')
      }else{
        await createBlog(data.title,data.content,user.uid,user.displayName ?? 'unknown user')
        toast.success('blog created successfully')
        navigate('/')
      }

      
    }catch(error){
      toast.error('Error creating blog')
    }
  }

  function handleCancel(){
    if(id){
      navigate('/my-blogs')
    }else{
      navigate('/')
    }
  }

  return (
    <div className="create-blog-container">
      <div className="create-blog-card">
        <div className="create-blog-header">
          <h2>
            {id ? "Edit" : "Create New"}{" "}
            <span className="highlight">Post</span>
          </h2>
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
                minLength:{value:20,message:'context should be at least 20 character'}
              })}
            />
            {errors.content &&(
                <p style={{color: "#e74c3c",fontSize: "12px",margin: "5px 0 0"}}>{errors.content.message}</p>
            )}
          </div>

          <div className="create-blog-actions">
            <button type="button" className="btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              {id ? "Update Post" : "Publish Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}