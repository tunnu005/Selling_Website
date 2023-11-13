import jwt from 'jsonwebtoken'
import User from '../Models/user.js'


const auth = async (req,res,next)=>{

    try{
        const { token } = req.cookies
        
        if(!token) return res.json({
            message:'not loggin',
            status:false,
        })

        const decodeddata = jwt.verify(token,process.env.JWS_SECRET_KEY,)
         req.user  =await User.findById(decodeddata.userId);

        next();
    }catch(err){
        console.log('Error : ',err)
    }
}

export default auth;