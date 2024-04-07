import { useState } from 'react'
import bookImg from '../../../../assets/book-img.jpg'
import '../style/cardBook.css'
import pdf from '../../../../assets/voice over.pdf'
import Switch from '@mui/material/Switch';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function CardBook({ showPdf }) {
  const navigate = useNavigate();

  return (
    <div className='card-book flex flex-col border w-full h-full rounded-lg' >
      <div className='flex p-1' >
        <img src={bookImg} className='h-full w-1/4 rounded-lg' />
        <div className='flex flex-col gap-2 pl-2' >
        <h1 className='text-left text-bold text-4xl' >Title</h1>
        <span className='text-left block text-gray-600 text-bold text-lg' >Category</span>
        <span className='text-left block text-gray-600 text-bold text-lg' >14 y - 25 y</span>
        <p className='p-2 text-left ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex fugit, quis consequatur eum consectetur. Sit ipsam debitis, aperiam aliquam, veritatis qua</p>
        </div>
        
      </div>

      <div className='pl-2 p-2' >

        
        <ul className='files list-none flex gap-2 flex-wrap' >
          <li className='file' onClick={() => showPdf()} >Arbic</li>
          <li className='file' onClick={() => showPdf()}>English</li>
          <li className='file' onClick={() => showPdf()}>Exercies</li>
          <li className='file' onClick={() => showPdf()}>E Book</li>
          <li className='file' onClick={() => showPdf()}>Cards</li>
          <li className='file' onClick={() => showPdf()}>Short Story</li>
        </ul>
        <div className='flex gap-2 justify-center pt-2' >
          <button onClick={ () => navigate("edit-product")} className='btn flex items-center justify-center gap-1 bg-green-600 p-2 text-white rounded-lg w-28'>
            <BiEdit />
            Edit</button>
          <button className='btn flex items-center justify-center gap-1 bg-red-600 p-2 text-white rounded-lg w-28' >
            <BiTrash />
            Delete</button>
          <Switch {...label} defaultChecked style={{ cursor: "no-drop" }} />
        </div>
      </div>


    </div>
  )
}
