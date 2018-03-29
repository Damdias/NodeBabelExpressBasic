import mongoose from "mongoose";

let User = mongoose.model('User',{
    userName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required: true,
        trim:true
    }
});

export default User;