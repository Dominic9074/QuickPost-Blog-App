import { addDoc,collection,getDocs,serverTimestamp,query, where } from "firebase/firestore";
import {db} from '../firebase/firebase'

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