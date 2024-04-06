import './App.css'
import NavBar from './components/navBar/NavBar'
import SideBar from './components/sideBar/SideBar'
import { Outlet } from 'react-router'



function App() {
  
  return (
    <div className=' flex app' >
      <SideBar />
      <div className='side-rigth relative ml-64 h-full' >
        <NavBar />
        <Outlet />
      </div>
    </div>


  )
}

export default App
