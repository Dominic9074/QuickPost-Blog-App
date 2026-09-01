import { addDoc,collection,getDocs,serverTimestamp } from "firebase/firestore";
import {db} from '../firebase/firebase'


export const createBlog=async (title:string,content:string,authorId:string)=>{
    const blogRef=await addDoc(collection(db,'blogs'),{
        title,content,authorId,
        createAt:serverTimestamp(),
        updateAt:serverTimestamp()
    })
    return blogRef.id;
}

export const getBlog=async ()=>{
    const snapshot=await getDocs(collection(db,'blogs'));

    return snapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data(),
    }))
}

