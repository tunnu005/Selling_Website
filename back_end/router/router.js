import express from 'express'
import auth from '../middleware/auth.js';
import { Login, Register } from '../Functions/user.js';
import { Getpost, Upload, addpendding } from '../Functions/product.js';
import upload from '../utils/upload.js';


const Router  = express.Router()


Router.post('/login',Login);
Router.post('/register',Register)
Router.post('/upload',upload.single('file'),Upload)
Router.get('/getpost',Getpost);
Router.get('/search/:id');
Router.post('/add/pendding',addpendding)



export default Router;