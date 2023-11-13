import mongoose from "mongoose";

const penddingSChema = mongoose.Schema({

    PName:
    {
        type:String
    },
    price:
    {
        type:Number
    },
    Id:{
        type:Number
    },
    CName:{
        type:String
    },
    address:{
        type:Array
    },
    MNumber:{
        type:Number
    }
})

const pendding = mongoose.model('Pendding',penddingSChema)
export default pendding;