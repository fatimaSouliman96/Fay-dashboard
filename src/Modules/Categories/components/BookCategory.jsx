import React from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";

    
export default function BookCategory() {
    const navigate = useNavigate();
  return (

      <ol className='div-books border flex flex-col gap-5 bg-white rounded-lg p-4 w-1/2 h-1/2' >
        <li className='one-book flex font-bold text-xl items-center justify-between' >
            book
            <div className='flex gap-3' >
                <BiEdit onClick={ () => navigate("/edit-product")} size={30} style={{color:"white" , cursor:"pointer"}} className='bg-green-600 p-1 rounded-lg' />
                <BiTrash size={30} style={{color:"white" , cursor:"pointer"}} className='bg-red-600 p-1 rounded-lg'/>
            </div>
        </li>
        <li className='one-book flex font-bold text-xl items-center justify-between' >
            book
            <div className='flex gap-3' >
                <BiEdit onClick={ () => navigate("/products/edit-product")} size={30} style={{color:"white" , cursor:"pointer"}} className='bg-green-600 p-1 rounded-lg' />
                <BiTrash size={30} style={{color:"white" , cursor:"pointer"}} className='bg-red-600 p-1 rounded-lg'/>
            </div>
        </li>
        <li className='one-book flex font-bold text-xl items-center justify-between' >
            book
            <div className='flex gap-3' >
                <BiEdit onClick={ () => navigate("/products/edit-product")} size={30} style={{color:"white" , cursor:"pointer"}} className='bg-green-600 p-1 rounded-lg' />
                <BiTrash size={30} style={{color:"white" , cursor:"pointer"}} className='bg-red-600 p-1 rounded-lg'/>
            </div>
        </li>
        <li className='one-book flex font-bold text-xl items-center justify-between' >
            book
            <div className='flex gap-3' >
                <BiEdit onClick={ () => navigate("/products/edit-product")} size={30} style={{color:"white" , cursor:"pointer"}} className='bg-green-600 p-1 rounded-lg' />
                <BiTrash size={30} style={{color:"white" , cursor:"pointer"}} className='bg-red-600 p-1 rounded-lg'/>
            </div>
        </li>
        <li className='one-book flex font-bold text-xl items-center justify-between' >
            book
            <div className='flex gap-3' >
                <BiEdit onClick={ () => navigate("/products/edit-product")} size={30} style={{color:"white" , cursor:"pointer"}} className='bg-green-600 p-1 rounded-lg' />
                <BiTrash size={30} style={{color:"white" , cursor:"pointer"}} className='bg-red-600 p-1 rounded-lg'/>
            </div>
        </li>
      
        
      </ol>

  )
}
