import { addDoc,collection,getDocs,serverTimestamp,query, where, getDoc, doc, updateDoc,deleteDoc } from "firebase/firestore";
import {db} from '../firebase/firebase'
import useAuth from "../hooks/userAuth";

export const createBlog=async (title:string,content:string,authorId:string,authorName:string)=>{
    const blogRef=await addDoc(collection(db,'blogs'),{
        title,content,authorId,authorName,
        createdAt:serverTimestamp(),
        updatedAt:serverTimestamp(),
    })
    return blogRef.id;
}

export const getBlogs=async ()=>{
    const snapshot=await getDocs(collection(db,'blogs'));

    return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      title: data.title,
      content: data.content,
      authorId: data.authorId,
      authorName:data.authorName,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  });
}

export const getMyBlogs=async (authorId:string)=>{
  const snapshot =await getDocs(query(collection(db,'blogs'),where('authorId','==',authorId)));

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      title: data.title,
      content: data.content,
      authorId: data.authorId,
      authorName: data.authorName,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  });

}

export const getBlogById=async (id:string)=>{

  const snapshot=await getDoc(doc(db,'blogs',id))

  if(!snapshot.exists()){
    return null;
  }
  const data = snapshot.data();

  return {
    id: snapshot.id,
    title: data.title,
    content: data.content,
    authorId: data.authorId,
    authorName: data.authorName,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };
}

export const updateBlog=async (id:string,title:string,content:string,userId:string)=>{

  const blogData=await getBlogById(id)

  if(userId!==blogData?.authorId){
    throw new Error('User Not Authorized')
  }

  await updateDoc(doc(db,'blogs',id),{title,content,updatedAt:serverTimestamp()})
}

export const deleteBlog=async (id:string)=>{
  await deleteDoc(doc(db,'blogs',id))
}
