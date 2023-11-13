import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({

    Photo:
    {
        data:Buffer,
        contentType: String
       
    },

    Name:{
        type:String
    },
    Price:{
        type:Number
    },
    Role:{
        type:String
    }
})

const Product = mongoose.model('Product',ProductSchema)
export default Product;