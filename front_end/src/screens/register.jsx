import styled from "@emotion/styled";
import logo from "../images/logo.jpg";
import { Box, Divider, TextField, Typography, Button } from "@mui/material";
import "../css/login.css";
import Address from "../components/login/address";
import { useState } from "react";
import { register } from "../../APIS/user";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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



const Login = () => {

  const navigation = useNavigate()

  const [open,setopen] = useState(false)
  const [email,setemail] = useState()
  const [password,setpassword] = useState()
  const [mobile,setmobile] = useState()
  const [address,setaddress]=useState()
  const [state,setstate] = useState()
  
  const UserValidation = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');

  const handleregister = async() =>{

    if(!UserValidation.test(email))
    {
        toast.info('Please Enter Valid Email!')
        return
    }

      const responce = await register({
          email:email,
          password:password,
          mobile:mobile,
          state:state,
          address:address

        })

        console.log(responce)
        if(responce.state == false)
        {
          console.log(responce.message)
          toast.error(responce.message)

        }
        else{
          console.log(responce.message)
          navigation('/')
        }


  }

  return (
    <Container>
        <ToastContainer />
      <LogoImage src={logo} alt="Logo" />
      <FormBox className="container1">
        <Heading variant="h1">Sign up</Heading>
        <Divider variant="middle" />
        <EmailField id="outlined-required-email" label="Email" className="text1" onChange={(e)=>{setemail(e.target.value)}}/>
        <EmailField id="outlined-required-password" label="Password" type="password" className="text1" onChange={(e)=>{setpassword(e.target.value)}}/>
        <EmailField id="outlined-required" label="mobile number" type="number" className="text1" onChange={(e)=>{setmobile(e.target.value)}}/>
       <button className="block my-4 bg-teal-400 rounded shadow-sm shadow-black px-1.5 py-2" onClick={()=>setopen(true)}>Select Address</button>
        <Button variant="contained" color="success" onClick={handleregister}>
        Sign up
      </Button>
      </FormBox>
     <Address open={open} setopen={setopen} address={address} setaddress={setaddress} setstate={setstate} State={state}/>
    </Container>
   
  );
};

export default Login;
