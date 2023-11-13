import { Dialog, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material"
import '../../css/login.css'
import { useState } from "react"




const Address = ({open,setopen, address, setaddress,State,setstate} ) => {

    
    const [data1,setdata1] = useState()
    const [data2,setdata2] = useState()
    const [data3,setdata3] = useState()
    const [data4,setdata4] = useState()
    const [data5,setdata5] = useState()

    const Country = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli and Daman and Diu",
        "Lakshadweep",
        "Delhi",
        "Puducherry",
        "Ladakh",
        "Ladakh"
    ]

    

    const handleChange = (event) => {
        setstate(event.target.value);
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={()=>setopen(false)}
            >
                <div style={{ height: 450, width: 400 }}>
                    <FormControl fullWidth >
                        <InputLabel id="demo-simple-select-label" className="country">State</InputLabel>
                        <Select className="country"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={State}
                            label="State"
                            onChange={handleChange}

                        >
                            {Country.map(oneCountry => (
                                <MenuItem value={oneCountry}>{oneCountry}</MenuItem>
                            ))}

                        </Select>
                        <div className="container">
                            <label className="label">Flat,House no., Building, Company, Apartment</label>
                            <input type="text" className="text" onChange={(e)=>{setdata1(e.target.value)}}/>
                        </div>
                        <div className="container">
                            <label className="label">Area, Street, Sector, Village</label>
                            <input type="text" className="text" onChange={(e)=>{setdata2(e.target.value)}}/>
                        </div>
                        <div className="container">
                            <label className="label">Lanmark</label>
                            <input type="text" className="text" onChange={(e)=>{setdata3(e.target.value)}}/>
                        </div>
                        <div className="container">
                            <label className="label">Pincode</label>
                            <input type="number" className="text" onChange={(e)=>{setdata4(e.target.value)}}/>
                        </div>
                        <div className="container">
                            <label className="label">Town/City</label>
                            <input type="text" className="text" onChange={(e)=>{setdata5(e.target.value)}}/>
                        </div>
                        <Button variant="contained" color="success" style={{width:80,margin:'10px 10px'}} onClick={()=>{
                            setaddress([data1,data2,data3,data4,data5])
                            setopen(false)
                        }}>
                            add 
                        </Button>
                    </FormControl>

                </div>

            </Dialog>
        </>
    )
}

export default Address