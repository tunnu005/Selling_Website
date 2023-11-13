import { useEffect } from "react"
import "../../css/Home.css"
import image1 from '../../images/i1.jpg'
import image2 from '../../images/i2.jpg'
import image3 from '../../images/i3.jpg'
import Dialogbox from "../dialogbox/dialogbox"
import { addpendding } from "../../../../back_end/Functions/product"
const Offers = ({open ,setopen,produce}) => {

    useEffect(()=>{
        const show = () =>{
            console.log('produce : ',produce)
        }
        show();
    })


    // const products = [
    //     {
    //         head:' Pick up where you left off 1',
    //         image:image1,
    //         bottom:123
    //             },
    //     {
    //         head:' Pick up where you left off 1',
    //         image:image1,
    //         bottom:123        },
    //     {
    //         head:' Pick up where you left off 1',
    //         image:image1,
    //         bottom:123        },
    //     {
    //         head:' Pick up where you left off 1',
    //         image:image1,
    //         bottom:123
    //     },
    //     {
    //         head:' Pick up where you left off 1',
    //         image:image1,
    //         bottom:123
    //     }
    // ]


    const Buys = async(product) =>{
        console.log('product : ',product)



        const responce = await addpendding({
            
        })
    }  

    return (

        <>
            <div className="offerbg">
                <div className="sub-offerbg">
                    {
                        produce.map((product)=>(
                            <>
                                  <div className="rotate"

                                  onClick={()=>{setopen(true)}}
                    >
                        <div className="head">
                           {product.Name}
                        </div>
                        <img src={product.imageURL} alt="" />
                        <div className="rupees">
                            ₹   {product.price}
                        </div>
                        <hr/>
                    <div >
                        <div className="buy" style={{marginTop:'10px',margin:'0 auto',width:80,background:'#fce323',fontSize:20,textAlign:"center",cursor:'pointer',borderRadius:5}}
                            onClick={()=>{Buys(product)}}
                        >
                            Buy
                        </div>
                    </div>
                    </div>
                    
                   
                            </>
                        ))
                    }
                    
                   
                   
                    
                </div>
            
            </div>
           
        </>
    )

}


export default Offers