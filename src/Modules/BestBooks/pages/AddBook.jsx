import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './style/addProduct.css'
import { useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import { ImCancelCircle } from 'react-icons/im';
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";


export default function AddBook() {

    const navigate = useNavigate();
    const [img, setImg] = useState("")

    const hundellChangeImg = (value) => {
        setImg(URL.createObjectURL(value))
    }
    return (
        <form className='flex flex-col items-center justify-center gap-12 pb-16 w-full h-screen' >
            <div className='flex gap-28' >
            
            <div className='border h-96 py-12 pr-2 pl-32 m-2 w-10/12' >
                <div className='flex items-center ' >
                    <div className='flex flex-col gap-6' >
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Ages" variant="outlined" placeholder='12y - 14y' />
                    </div>
                    <div className='flex flex-col gap-3 pl-4' >
                        <div className='pb-8' >
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={10}
                                label="Category"
                                className='mt-2'
                            >
                                <MenuItem value={10}>test1</MenuItem>
                                <MenuItem value={20}>test2</MenuItem>
                                <MenuItem value={30}>test3</MenuItem>
                            </Select>
                        </div>
                        <div className='w-3/5 h-16 ' >
                            <img width={100} height={100} src={img} style={{ backgroundColor: "transparent" , border:"1px solid #babbbc" , borderRadius:"0.2rem" }} />
                            <input type='file' className='input-img' onChange={e => hundellChangeImg(e.target.files[0])} />
                        </div>
                    </div>
                </div>
            </div>
            <BiArrowFromLeft size={50} style={{cursor:"pointer" }} onClick={() => navigate("/best-selling-books")} />
            </div>
            <div className='flex gap-16 justify-end pr-44'>
            <button type='submit' className='btn-add-pro btn flex items-center justify-center gap-1 bg-blue-600 p-2 text-white rounded-lg w-28' >
                <GrAddCircle />
                Add</button>
            <button type='submit' className='btn-add-pro btn flex items-center justify-center gap-1 bg-gray-600 p-2 text-white rounded-lg w-28' >
                <ImCancelCircle />
                Cancel</button>
            </div>
            
            

        </form>

    )
}
