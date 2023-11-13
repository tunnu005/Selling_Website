import styled from "@emotion/styled";
import { Box } from "@mui/material";
import '../../css/product.css'

const Container  = styled(Box)`
    border:1px solid black;
    width:500px;
    border-radius:3px;
    margin-left:50px;

    @media (max-width:600px){
        width:300px;
    }

    @media (min-width: 601px) and (max-width: 960px) {
        margin-left:80px;
    }
`


const realImage = ({ image }) => {

    return (
        <>
            <Container>
                <img src={image} alt="image"  className="imagestyle"/>
            </Container>
        </>
    )
}
export default realImage;