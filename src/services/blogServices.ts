import { addDoc,collection,serverTimestamp } from "firebase/firestore";
import {db} from '../firebase/firebase'


export const createBlog=async (title:string,content:string,authorId:string)=>{
    const blogRef=await addDoc(collection(db,'blogs'),{
        title,content,authorId,
        createAt:serverTimestamp(),
        updateAt:serverTimestamp()
    })
    return blogRef.id;
}

