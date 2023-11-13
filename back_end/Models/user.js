import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        unique:true,
    },
    mobile:{
        type:Number
    },
    state:{
        type:String
    },
    address:{
        type:Array
    }

},
{
    timestamps:true
}
) 

const User = mongoose.model('User',UserSchema);
export default User;