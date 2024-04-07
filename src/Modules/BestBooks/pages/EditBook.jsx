import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './style/addProduct.css'
import { useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import { FcCancel } from 'react-icons/fc';
import { ImCancelCircle } from 'react-icons/im';
import { BiArrowFromLeft, BiArrowFromRight, BiEdit } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";


export default function EditBook() {

    const navigate = useNavigate();
    const [img, setImg] = useState("")

    const hundellChangeImg = (value) => {
        setImg(URL.createObjectURL(value))
    }
    return (
        <form className='flex flex-col justify-center gap-12 pb-16 w-full h-screen pt-4' >
        <div className='flex  gap-28' >

            <div className='flex gap-12 items-center justify-center py-4 pl-32  m-2 w-10/12' >
                <div className='flex flex-col gap-6 justify-center' >
                    <div className='flex flex-col gap-6' >
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Ages" variant="outlined" placeholder='12y - 14y' />
                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                About
                            </label>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about the book.</p>
                            <div className="mt-2">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex  gap-16 pl-4' >
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
                        <div className='relative w-3/5 h-16' >
                            <img width={100} height={100} src={img} style={{ backgroundColor: "transparent", border: "1px solid #babbbc", borderRadius: "0.2rem" }} />
                            <input  type='file' accept="image/*" className='input-img' onChange={e => hundellChangeImg(e.target.files[0])} />
                            <button className='btn-upload' >Choose image</button>
                        </div>
                    </div>
                </div>
            </div>
            <BiArrowFromLeft size={50} style={{ cursor: "pointer" }} onClick={() => navigate("/main/best-selling-books/")} />
        </div>

        <div className='flex gap-16 justify-end pr-64 mr-12'>
            <button type='submit' className='btn-add-pro btn flex items-center justify-center gap-1 bg-blue-600 p-2 text-white rounded-lg w-28' >
                <BiEdit />
                Edit</button>
            <button type='submit' className='btn-add-pro btn flex items-center justify-center gap-1 bg-gray-600 p-2 text-white rounded-lg w-28' >
                <ImCancelCircle />
                Cancel</button>
        </div>



    </form>

    )
}
