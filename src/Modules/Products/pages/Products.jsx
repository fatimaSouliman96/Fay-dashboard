import React from 'react'
import Slider from '../components/slider/Slider'
import { GrAddCircle } from 'react-icons/gr'
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  return (
    <div >
      <div className='w-full p-2' >
      <Slider />
      </div>
      <button onClick={() => navigate("add-product")} className='btn flex items-center justify-center gap-1 bg-blue-600 p-2 text-white rounded-lg w-28' >
        <GrAddCircle />
        Add</button>

    </div>
  )
}

export default Products
