import mongoose,{model,Schema,Document,ObjectId,} from "mongoose";
import Lessons from "./lessons";


export interface Course extends Document{
    title:string;
    slug:string;
    description:string;
    price:number;
    free_preview:boolean;
    image:string;
    published:boolean;
    paid:boolean;
    instructor:Schema.Types.ObjectId; // inner join 
    lessons:Lessons[];
    createdAt:Date;
    updatedAt:Date;
}

const courseSchema: Schema=new Schema<Course>({
    title:{type:String,required:true},
    slug:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    free_preview:{type:Boolean,required:true},
    image:{type:String,required:true},
    published:{type:Boolean,required:true},
    paid:{type:Boolean,required:true},
    lessons:[Lessons],
    instructor:{type:Schema.Types.ObjectId,ref:"User"},


},{timestamps:true})


const Course= mongoose.model.Course ||model<Course>("Course",courseSchema)

export default Course