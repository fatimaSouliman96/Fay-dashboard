import '../components/style/comment.css'
import { BiArrowFromLeft, BiTrash, BiUser } from 'react-icons/bi'
import { BsPostcard } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";

    
export default function SingleComment() {

    const navigate = useNavigate();

  return (
    <>
    <BiArrowFromLeft size={50} style={{cursor:"pointer" , float:"right" }} onClick={() => navigate("/main/comments/")} />
    <div className='w-1/2 comment flex flex-col m-auto mt-8 gap-4' >
      <header className='flex gap-3 ' >
        <BiUser size={50} style={{backgroundColor:"white" , padding:"0.2rem" , borderRadius:"50%"}} />
        <div className='' >
            <h1 className='font-bold' >Name</h1>
            <span className='text-sm text-gray-600' >example@email.com</span>
        </div>
      </header>
      <main>
        <p className='text-lg text-black p-2' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus asperiores esse libero eligendi provident! Fugit unde reprehenderit dignissimos facere, in et id aut distinctio minima veritatis laboriosam, dicta quasi non 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus asperiores esse libero eligendi provident! Fugit unde reprehenderit dignissimos facere, in et id aut distinctio minima veritatis laboriosam, dicta quasi non 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus asperiores esse libero eligendi provident! Fugit unde reprehenderit dignissimos facere, in et id aut distinctio minima veritatis laboriosam, dicta quasi non 
            
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
    </>
   
  )
}