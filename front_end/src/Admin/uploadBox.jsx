import { Button, Dialog, FormControl, Input, InputAdornment, InputLabel, TextField } from '@mui/material'
import '../css/admin.css'
import { useState } from 'react'
import { UploadPost } from '../../APIS/user';


const UploadBox = ({open,setopen}) => {



    const [selectedImage, setSelectedImage] = useState();
    const [Name,setname] = useState();
    const [price,setprice] = useState();

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        // setSelectedImage(URL.createObjectURL(file));
        setSelectedImage(file)
    };

    const Upload = async() =>{
        const data = new FormData();
        
        data.append("file",selectedImage);
        data.append("name",Name)
        data.append("price",price)

        console.log('data : ',data)
        const responce = await UploadPost(data)
        if(responce.state == true)
        {
            setopen(false)
            setSelectedImage()
            setname()
            setprice()
        }


    }

    return (
        <>
            <Dialog
                open={open}
                onClose={()=>{setopen(false)}}

            >
                <div className='uploadBox'>
                    <div>
                        <label htmlFor="fileInput" className="inputIMage">Select from computer</label>
                        <input type="file" accept="image/*" id='fileInput' style={{ display: 'none', }} onChange={(event) => { handleImageChange(event); }} />


                    </div>
                    <div className='imageselection'>
                        {
                            selectedImage ? <img src={URL.createObjectURL(selectedImage)} alt="" width='100px' height='100px' /> : 'not selected'
                        }
                    </div>

                    <div className='textdeck'>
                        <TextField id="outlined-basic" label="Name" variant="outlined" placeholder='Enter Name of Product' onChange={(e)=>{setname(e.target.value)}}/>
                    </div>
                    <div className='textdeck'>
                        <TextField id="outlined-basic" label="Price" variant="outlined" type='number' placeholder='Enter Price of Product' onChange={(e)=>{setprice(e.target.value)}}/>
                    </div>
                    <div className='textdeck' onClick={Upload}>
                        <Button variant="contained" color="success">
                            Upload
                        </Button>
                    </div>

                </div>
            </Dialog>

        </>
    )
}

export default UploadBox;