import { Box } from "@mui/material";
import Navbar from "../components/Home/navbar";
import Image from "../components/Product/image";
import styled from "@emotion/styled";
import Description from "../components/Product/description";

const Container = styled(Box)`
    margin-top:80px;
    display:flex;
`

const produt = () => {

    return (
        <>
            <Navbar />
            <Container>
                <div>
                    <Image />
                </div>
                <div>
                    <Description/>
                </div>
            </Container>
        </>
    )
}

export default produt;