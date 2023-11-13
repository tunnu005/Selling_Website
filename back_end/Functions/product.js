import pendding from "../Models/pendding.js"
import Product from "../Models/product.js"

export const Upload = async(req,res) =>{
    try{
        
        // console.log('file K: ',req.file);
        const newProduct = new Product({
            Photo:{
                data:req.file.buffer,
                contentType: req.file.mimetype
            },
            Name:req.body.name,
            Price:req.body.price
        })
        // console.log('here')
            await newProduct.save()

            return res.status(200).json({
                state:true,
                message:'Successfully Uploaded'
            })

    }catch(err)
    {
        return res.status(500).json('Error : ',err)
    }
} 


export const Getpost = async(req,res) =>{
    try{
        // console.log('here')

        const data  =await Product.find({Role:'main'});
        // console.log('data : ',data)

        const first_ten = [];

        for(let i=0;i<4;i++)
        {
            // first_ten[i]=data[i];
            console.log('this is here')
            const base64Image = data[i].Photo.data.toString('base64')
            const imageData = `data:${data[i].Photo.contentType};base64,${base64Image}`;

            const object = {
                id:data[i]._id,
                imageURL:imageData,
                Name:data[i].Name,
                price:data[i].Price
            }

            first_ten.push(object)
        }
            console.log('first_ten : ',first_ten)
        return res.status(200).json(first_ten)



    }catch(err)
    {
       console.log("Error : ",err)
    }
}

export const Searchdatra = () =>{
    try{

    }catch(err){
        console.log("Error : ",err)
    }
}

export const addpendding = async(req,res) =>{
    try{
        
        const newP = new pendding(req.body)

        await newP.save()

        return res.status(200).json({message:'successful',state:true})
    }catch(err){
        console.log("Error : ",err)
    }
}

