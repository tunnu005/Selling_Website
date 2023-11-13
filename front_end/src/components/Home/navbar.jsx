import { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ImLocation2 } from "react-icons/im";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import "../../css/Home.css";
import { AccountContext } from "../../../context/AccountProvider";

const Navbar = () => {


    // useEffect(()=>{

    // },[])

    const [text,settext] = useState('')

    const Search = () =>{

      if(text == '')
      {
        
      }
      else{
        
      }

    }



  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
         
          position="fixed"
          style={{ background: "#131921" }}
        >
          <Toolbar
            
          >
            <div
             className="full"
            >
              
            <div className="row1"><IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{

                  padding: "10px 15px",
                }}
                id="home"
              >
                Home
              </Typography>
              <Typography className="delivery">
                <div style={{ fontSize: "12px", paddingLeft: 15 }}>
                  Delivery to Customer
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <ImLocation2 />
                  </div>
                 
                </div>
              </Typography>
            </div>
           <div className="row2"> <div
              className={`border-current rounded-sm border-2 flex mx-4`}
            >
              <input
                type="text"
                className="search"
                placeholder="Search here..."
              />
              <BiSearchAlt2
                onClick={Search}
              className="buy"
                style={{
                  background: "#f5b520",
                  padding: "5px",
                  height: 35,
                  width: 50,
                  cursor: "pointer",
                }}
              />
            </div></div>

             <div className="row3">   

            <div className="profile">Hello Dear Customer</div>
            </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
