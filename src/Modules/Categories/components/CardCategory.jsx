import { BiEdit, BiTrash } from 'react-icons/bi'
import './style/cardCategory.css'

export default function CardCategory({showBooks , edit}) {
  return (
    <div  className='card-category p-2 w-1/5 text-center rounded-lg' >
     
      <h1 className='text-2xl ' >Category</h1>
      <span className='text-lg text-gray-500 hover:text-blue-500 ' onClick={() => showBooks()} >13 Book</span>
      <div className='flex gap-1 justify-center pt-2' >
          <button onClick={ () => edit()} className='btn flex items-center justify-center gap-1  p-2 text-white rounded-lg w-12 '>
            <BiEdit size={25} color='green' />
            </button>
          <button className='btn flex items-center justify-center gap-1  p-2 text-white rounded-lg w-12' >
            <BiTrash size={25} color='red' />
            </button>
        </div>
    </div>
  )
}
