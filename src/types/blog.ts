import { Timestamp } from "firebase/firestore";


export default interface BlogInterface{
    id:string;
    title:string;
    content:string;
    authorId:string;
    createdAt:Timestamp;
    updatedAt:Timestamp;
}

