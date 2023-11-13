import axios from 'axios'

const url = 'http://localhost:8000'

export const login = async(data) =>{
    try{
        const responce =await axios.post(`${url}/login`,data)
        return responce.data;
    }
    catch(err){
        console.log('Error : ',err);
    }
}

export const register = async(data) =>{
    try{
        const responce =await axios.post(`${url}/register`,data)
        return responce.data;
    }
    catch(err)
    {
        console.log("Error : ",err)
    }
}

export const UploadPost = async(data) =>{
    try{

        const responce =await axios.post(`${url}/upload`,data)
        return responce.data;
    } catch(err){
        console.log("Error : ",err)
    }
}

export const GetPost = async() =>{
    try{

        const responce =await axios.get(`${url}/getpost`)
        return responce.data;
    } catch(err){
        console.log("Error : ",err)
    }
}

export const Searchdata = async(id)=>{
    try{

        const responce =await axios.get(`${url}/search/${id}`)
        return responce.data;
    }catch(err){
        console.log("Error : ",err)
    }
}

export const Buys = async(data) =>{
    try{
        const responce  = await axios.post(`${url}/add/pendding`,data);
        return responce.data;
    }catch(err){
        console.log("Error : ",err)
    }
}