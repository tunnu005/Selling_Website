import mongoose from 'mongoose'
import {config} from 'dotenv'

config({
    path:'./general.env'
})

const URL = process.env.MONGO_URI


const Connection = async () =>{
    try{

        const {connect} =await mongoose.connect(URL,{useUnifiedTopology:true},{
            dbName:'Medicine-Sell'
        })

        console.log('DataBase Connected')
        // console.log(`Server Connected to database ${connect}`)

    }catch(err)
    {
        console.log(err)
    }
}

export default Connection;