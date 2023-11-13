import { Box } from '@mui/material'
import Imag1 from '../../images/i1.jpg'
import Imag2 from '../../images/i2.jpg'
import '../../css/product.css'
import styled from '@emotion/styled'
import RealImage from './realimage'
import { useState } from 'react'

const Container = styled(Box)`
    display:flex;
    margin:90px;

    @media (max-width:600px){
        margin:10px;
        margin-left:40px;
    }

    @media (min-width: 601px) and (max-width: 960px) {
        margin:10;
        margin-bottom:30px;
    }
`



const Imagepanel = () => {

   
    const imagearr = [
        Imag1,
        Imag2,
        Imag1,
        Imag2,
        Imag1
    ]
    const [imageBox,setImageBox] = useState(imagearr[1])

    const handlechange = (image) =>{
        setImageBox(image)
    }

    return (

        <>
            <Container>

                {imagearr.map((image) => (
                    <div className='imageBox'>
                        <img src={image} alt="image" className='imagepart'  onClick={()=>{handlechange(image);}}/>
                    </div>

                ))}

               



            </Container>
            <RealImage image={imageBox} />
        </>
    )
}

export default Imagepanel