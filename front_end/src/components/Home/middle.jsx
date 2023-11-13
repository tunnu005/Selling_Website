import { useEffect, useState } from 'react';
import Card from '../Home/card'
import Dialogbox from '../dialogbox/dialogbox';
import Offers from './offers';


const Middle = ({data}) =>{

    const [open,setopen] = useState(false);
    const [selecte,setselect] = useState();

    useEffect(()=>{
        const show = () =>{
            console.log('data middle :  : ',data)
        }
        show();
    })
    

    return(
        <>
            <Card/>
            <Offers open={open} setopen={setopen} produce={data} />
            
        </>
    )
}

export default Middle;