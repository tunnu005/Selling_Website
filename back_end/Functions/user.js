import User from "../Models/user.js";
import bcrypt from 'bcrypt'
import Jwt  from "jsonwebtoken";
import { sendToken } from "../utils/feature.js";
import {config} from 'dotenv'

config({
    path:'./general.env'
})

const secret_key = process.env.JWS_SECRET_KEY


export const Login = async (req,res) =>{

    
    try{
        // console.log('here it is')
        const { email, password } = req.body;
        const user = await User.findOne({ email:email });


        if(user && await bcrypt.compare(password,user.password))
        {
            // console.log(secret_key)
            const token = Jwt.sign({ userId: user._id }, secret_key, { expiresIn: 1000*60*60*24*10 });
            sendToken(user,res,`login successfully`,token )
            
        }
        else{
            res.status(200).json({message:'invalid email or password',state:false});
        }



    }catch(err){
        console.log('Error : ',err)
    }
}

export const Register = async(req,res) =>{
    try{

        // console.log('here it is')
        const {email,password,mobile,state,address} = req.body
       
        
        const newpass =await bcrypt.hash(password,10)
        // console.log(newpass)
       
        const available = await User.findOne({email:req.body.email})

        if(available)
        {
            return res.status(200).json({
                message:'Already Registered',
                state:false
            })
        }
        
        const newuser = new User({
           email: email,
            password:newpass,
            mobile:mobile,
            state:state,
            address:address
        })
        await newuser.save()
        
       return res.status(200).json({
            message:'Save Successfully',
            state:true
        })

    }catch(err){
      return res.status(500).json('Error : ',err)
    }

}