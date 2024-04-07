import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './style/addProduct.css'
import { useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import { ImCancelCircle } from 'react-icons/im';
import { BiArrowFromLeft, BiEdit } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";


export default function EditProduct() {

    const navigate = useNavigate();
    const [img, setImg] = useState("")

    const hundellChangeImg = (value) => {
        setImg(URL.createObjectURL(value))
    }
    return (
        <form className='flex flex-col gap-12 pb-16 w-full h-screen' >
            <div className='flex  gap-28' >

                <div className='flex gap-12 items-start py-4 px-16  m-2 w-10/12' >
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

                    <div className='add-files w-4/6 flex flex-wrap items-center justify-end gap-4 ' >
                        <div>
                            <label>Arbic File</label>
                            <div className='relative' >
                                <input type='file' className='input-file' />
                                <GrAddCircle size={70} style={{
                                    color: "green", position: "absolute", borderRadius: "0.2rem", padding: "0.2rem", zIndex: "1", top: "0rem", left: "0rem", width: "10%", height: "100%", backgroundColor: "#D7E6EA",
                                    borderBottom: "1px solid #babbbc",
                                    borderTop: "1px solid #babbbc",
                                    borderLeft: "1px solid #babbbc"
                                }} />
                            </div>
                        </div>

                        <div>
                            <label>English File</label>
                            <div className='relative' >
                                <input type='file' className='input-file' />
                                <GrAddCircle size={70} style={{
                                    color: "green", position: "absolute", borderRadius: "0.2rem", padding: "0.2rem", zIndex: "1", top: "0rem", left: "0rem", width: "10%", height: "100%", backgroundColor: "#D7E6EA",
                                    borderBottom: "1px solid #babbbc",
                                    borderTop: "1px solid #babbbc",
                                    borderLeft: "1px solid #babbbc"
                                }} />
                            </div>
                        </div>

                        <div >
                            <label>E Book File</label>
                            <div className='relative' >
                                <input type='file' className='input-file' />
                                <GrAddCircle size={70} style={{
                                    color: "green", position: "absolute", borderRadius: "0.2rem", padding: "0.2rem", zIndex: "1", top: "0rem", left: "0rem", width: "10%", height: "100%", backgroundColor: "#D7E6EA",
                                    borderBottom: "1px solid #babbbc",
                                    borderTop: "1px solid #babbbc",
                                    borderLeft: "1px solid #babbbc"
                                }} />
                            </div>
                        </div>

                        <div >
                            <label>Exeices File</label>
                            <div className='relative' >
                                <input type='file' className='input-file' />
                                <GrAddCircle size={70} style={{
                                    color: "green", position: "absolute", borderRadius: "0.2rem", padding: "0.2rem", zIndex: "1", top: "0rem", left: "0rem", width: "10%", height: "100%", backgroundColor: "#D7E6EA",
                                    borderBottom: "1px solid #babbbc",
                                    borderTop: "1px solid #babbbc",
                                    borderLeft: "1px solid #babbbc"
                                }} />
                            </div>
                        </div>

                        <div  >
                            <label>Cards Files</label>
                            <div className='relative' >
                                <input type='file' className='input-file' />
                                <GrAddCircle size={70} style={{
                                    color: "green", position: "absolute", borderRadius: "0.2rem", padding: "0.2rem", zIndex: "1", top: "0rem", left: "0rem", width: "10%", height: "100%", backgroundColor: "#D7E6EA",
                                    borderBottom: "1px solid #babbbc",
                                    borderTop: "1px solid #babbbc",
                                    borderLeft: "1px solid #babbbc"
                                }} />
                            </div>

                        </div>
                        <div  >
                            <label>Short Story Files</label>
                            <div className='relative' >
                                <input type='file' className='input-file' />
                                <GrAddCircle size={70} style={{
                                    color: "green", position: "absolute", borderRadius: "0.2rem", padding: "0.2rem", zIndex: "1", top: "0rem", left: "0rem", width: "10%", height: "100%", backgroundColor: "#D7E6EA",
                                    borderBottom: "1px solid #babbbc",
                                    borderTop: "1px solid #babbbc",
                                    borderLeft: "1px solid #babbbc"
                                }} />
                            </div>

                        </div>


                    </div>
                </div>
                <BiArrowFromLeft size={50} style={{ cursor: "pointer" }} onClick={() => navigate("/main/best-selling-books/")} />
            </div>

            <div className='flex gap-16 justify-end pr-44'>
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
