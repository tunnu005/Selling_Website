import styled from "@emotion/styled";
import logo from "../images/logo.jpg";
import { Box, Divider, TextField, Typography, Button } from "@mui/material";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { login } from "../../APIS/user";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { AccountContext } from "../../context/AccountProvider";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const LogoImage = styled.img`
  width: 100px;

  @media (min-width: 768px) {
    width: 150px;
  }
`;

const FormBox = styled(Box)`
  border: 1px solid #888;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 30px;
  }
`;

const Heading = styled(Typography)`
  font-size: 24px;
  margin: 20px 0;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const EmailField = styled(TextField)`
  width: 100%;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 90%;
  }
`;

const 

Login = () => {

  const navigate = useNavigate()

  const {user,setuser} = useContext(AccountContext)

  const [email,setemail] = useState();
  const [password,setpassword] = useState();

  

  const handleCLick = () =>{
    navigate('/Register')
  }

  const handleLogin = async() =>{
    const responce = await login({
      email:email,
      password:password
    })

    // console.log(responce)

    if(responce.state == true)
    {

      setuser(responce.user)
      navigate('/home')
    }
    else {
      toast(responce.message)
    }
  }
  
  return (
    <Container >
      <ToastContainer/>
      <LogoImage src={logo} alt="Logo" />
      <FormBox className="container1">
        <Heading variant="h1">Sign in!</Heading>
        <Divider variant="middle" />
        <EmailField id="outlined-required-email" label="Email" className="text1" onChange={(e)=>{setemail(e.target.value)}}/>
        <EmailField id="outlined-required-password" label="Password" className="text1" onChange={(e)=>{setpassword(e.target.value)}}/>
        <Button variant="contained" color="success" onClick={handleLogin}>
        Sign in
      </Button>

     <div onClick={handleCLick}> <Box className="my-4 text-blue-800 cursor-pointer">don't have account</Box></div>
      </FormBox>
     
    </Container>
    
  )
};

export default Login;
