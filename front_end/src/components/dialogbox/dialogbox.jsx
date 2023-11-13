import { Dialog } from "@mui/material"
import '../../css/Home.css'

const Dialogbox = ({open,setopen,product})=>{
    

    return(
        <>
            <Dialog
                open={open}
                onClose={()=>{setopen(false)}}
            >
               <div style={{height:200 , width:250}}>
                    <div style={{textAlign:"center",alignItems:"center",borderBottom:'1px solid black'}}>
                        {product.Name}
                    </div>
                    
                    <div style={{height:'125px',textAlign:"center",alignSelf:"center",justifyContent:"center",paddingTop:30}}>
                        little description like lorem and etc with some of words
                    </div>
                <hr/>
                    <div>
                        <div style={{margin:'10px 85px',width:80,background:'#fce323',fontSize:20,textAlign:"center",cursor:'pointer',borderRadius:5}}>
                            Buy
                        </div>
                    </div>
               </div>
            </Dialog>
        </>
    )
}

export default Dialogbox;