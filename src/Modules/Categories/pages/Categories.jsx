import React, { useState } from 'react'
import CardCategory from '../components/CardCategory'
import BookCategory from '../components/BookCategory'
import './style/categories.css'
import { CgClose } from 'react-icons/cg'
import AddCategory from '../components/AddCategory'
import { GrAddCircle } from 'react-icons/gr'
import EditCategory from '../components/EditCategory'

export default function Categories() {
    const [ styleBooks , setStyleBooks ] = useState("")
    const [ styleAdd , setStyleAdd ] = useState("")
    const [ styleEdit , setStyleEdit ] = useState("")

    const showBooks = () => {
        setStyleBooks("show-books")
    }
    const closeBooks = () => {
        setStyleBooks("")
    }
    const showAdd = () => {
        setStyleAdd("show-books")
    }
    const closeAdd = () => {
        setStyleAdd("")
    }
    const showEdit = () => {
        setStyleEdit("show-books")
    }
    const closeEdit = () => {
        setStyleEdit("")
    }
  return (
    <div className='pt-10  relative min-h-screen' >
      <div className='flex flex-wrap gap-5 justify-center items-center' >
        <CardCategory showBooks={showBooks} edit={showEdit} />
        <CardCategory showBooks={showBooks} edit={showEdit} />
        <CardCategory showBooks={showBooks} edit={showEdit} />
        <CardCategory showBooks={showBooks} edit={showEdit} />
        <CardCategory showBooks={showBooks} edit={showEdit} />
        <CardCategory showBooks={showBooks} edit={showEdit} />
        <CardCategory showBooks={showBooks} edit={showEdit} />
        <CardCategory showBooks={showBooks} edit={showEdit} />
        <CardCategory showBooks={showBooks} edit={showEdit} />
        <CardCategory showBooks={showBooks} edit={showEdit} />
        
      </div>


            <button onClick={() => showAdd()} type='submit' className='mt-5 btn-add-pro btn flex items-center justify-center gap-1 bg-blue-600 p-2 text-white rounded-lg w-28' >
                <GrAddCircle />
                Add</button>

      <div className={`${styleBooks} un-show`} >
        
        <BookCategory />
        <CgClose size={70} style={{paddingLeft:"1rem" , paddingBottom:"3rem" , cursor:"pointer"}} onClick={ () => closeBooks()} />
      </div>
      <div className={`${styleAdd} un-show`} >
        <AddCategory />
        <CgClose size={70} style={{paddingLeft:"1rem" , paddingBottom:"3rem" , cursor:"pointer"}} onClick={ () => closeAdd()} />
      </div>
      <div className={`${styleEdit} un-show`} >
        <EditCategory />
        <CgClose size={70} style={{paddingLeft:"1rem" , paddingBottom:"3rem" , cursor:"pointer"}} onClick={ () => closeEdit()} />
      </div>
      
    </div>
  )
}
