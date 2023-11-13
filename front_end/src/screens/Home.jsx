import { useEffect, useState } from "react";
import Middle from "../components/Home/middle";
import Navbar from "../components/Home/navbar"
import { GetPost } from "../../APIS/user";
import Anime1 from "../../animations/anime1";
// import Anime2 from "../../animations/anime2";
// import Anime2 from "../../animations/anime2";

const Home = () =>{

    // let data=[];
    const [data,setdata] = useState([])
    const [state,setstate] = useState(false)
    const [user,setuser] = useState()

    useEffect(()=>{
        // console.log('i am here')
        // data = await GetPost();
        // console.log('data : ',data)

        const getdata = async()=>{
            // console.log('length : ',data.length)
            const respomce = await GetPost();
            setdata(respomce)
            console.log('data : ',data)
            
            setstate(true)
            console.log('hey')
        }

        getdata();
        
    },[])

    return(
        <>
            <Navbar/>
           {
            state ?  <Middle data={data}/> : <Anime1/>
           }
           
        </>
    )
}

export default Home;