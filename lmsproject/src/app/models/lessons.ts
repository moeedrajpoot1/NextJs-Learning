

import mongoose ,{Schema, model ,Document} from "mongoose";


export interface Lessons extends Document{
    title:string;
    slug:string;
    description:string;
    video_preview:boolean;
    video_link:object;
    createdAt:Date;
    updatedAt:Date;
 
}
const Lessons :Schema= new Schema<Lessons>({
    title:{type:String,required:true},
    slug:{type:String,required:true},
    description:{type:String,required:true},
    video_preview:{type:Boolean,required:true},
    video_link:{type:Object,required:true}



},{timeStamp:true})


export default Lessons; 