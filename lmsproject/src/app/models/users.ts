import mongoose,{model,Schema,Document} from 'mongoose'

export interface User extends Document{

    name:string;
    email:string;
    passwrod:string;
    profileImage:string;
    role:string[];
    stripe_account_id:string;

    stripe_seller:{};
    passwordResetCode:{};
    prodile_details:{};
   

    createdAt:Date;
    updatedAt:Date;
}
const UserSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{
        type:[String],
        default:["student"],
        enum:["student","instructor","admin"]

    },
    profileImage:{type:String},
    stripe_account_id:{type:String},
    stripe_seller:{},
    
    passwordResetCode:{},
    prodile_details:{},
    
  


},{timestamps:true})

const User=mongoose.model.User|| model("User",UserSchema)
export default User