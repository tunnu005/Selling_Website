import { useState } from "react"
import Head from "./head"
import History from "./history"
import Pendings from "./pendings"
import UploadBox from "./uploadBox"


const Admin = () =>{

    const [open,setopen] = useState(false)
    return(
        <>
            <Head open={open} setopen={setopen}/>

            <div style={{display:'flex'}}>
                <Pendings/>
                <History/>
            </div>

            <UploadBox open={open} setopen={setopen}/>
        </>
    )
}

export default Admin