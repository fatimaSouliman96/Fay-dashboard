import { SiPostcss } from 'react-icons/si'
import './style/comment.css'
import { BiTrash, BiUser } from 'react-icons/bi'
import { BsPostcard } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";

 
export default function Comment() {
    const navigate = useNavigate();
  return (
    <div className='w-1/2 comment flex flex-col gap-4' >
      <header className='flex gap-3 ' >
        <BiUser size={50} style={{backgroundColor:"white" , padding:"0.2rem" , borderRadius:"50%"}} />
        <div className='' >
            <h1 className='font-bold' >Name</h1>
            <span className='text-sm text-gray-600' >example@email.com</span>
        </div>
      </header>
      <main>
        <p className='text-lg text-black' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span onClick={() => navigate("single-comment")}  className='text-lg text-gray-500 hover:text-blue-600 cursor-pointer' >
                ....more
            </span>
        </p>
      </main>
      <footer className='flex gap-3 justify-start pt-2' >
          <button onClick={ () => edit()} className='btn flex items-center bg-blue-600 justify-center gap-1  p-2 text-white rounded-lg w-28 '>
            <BsPostcard />
            Post
            </button>
          <button className='btn flex items-center justify-center gap-1 bg-red-600 p-2 text-white rounded-lg  w-28' >
            <BiTrash />
            Delete
            </button>
        </footer>
    </div>
  )
}
