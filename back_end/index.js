import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import Router from './router/router.js'
import Connection from './DB/connection.js'


const app = express()

const PORT = 8000

Connection()

app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',Router)
app.get('/',(req,res)=>{
    res.send("working")
})

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
    
})