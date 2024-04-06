import { NavLink } from "react-router-dom";
import '../style/sideBar.css'
import clsx from "clsx";
import { FaBookOpen } from "react-icons/fa6";
import logo from '../../assets/Fay logo.svg'
import { FaHome } from "react-icons/fa";
import { BiBookContent, BiSolidCategory } from "react-icons/bi";
import { FaComments } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

function SideBar({setNewArbic , arbic , setSection}) {
    
  const changeSection = (e) => {
    setSection(e.target.innerText)
  }
  return (
    <div className="side-bar p-3 w-1/6 bg-white shadow-lg rounded-2xl md:w-60 fixed"  >
      <h1 className={
        clsx(
          "p-3 flex items-center gap-1 font-bold text-xl text-black border-b-2 rounded-t-2xl ",
          {
            "p-3 flex flex-row-reverse font-bold text-xl text-black  rounded-2xl"
            : arbic == true 
          } 
        )
      } ><img src={logo} className="w-1/5 h-1/4" alt="Fay Dashboard Logo"/>{arbic == true ? "لوحة القيادة" : "Fay Dashboard"}</h1>
      <ul className="flex flex-col gap-6 list-none pt-9" >
          
          {/* <li  className="w-full mt-5" >
            <NavLink className={
              clsx(
                "w-full flex items-center gap-2 text-black font-bold text-lg  p-2 rounded-2xl transition",
                {
                  "w-full flex items-center gap-2 flex-row-reverse text-black font-bold text-lg hover:bg-slate-50 p-2 rounded-2xl transition"
                  : arbic == true  
                }
                
              )
            } to="/" state={{arbic: arbic}} ><FaHome style={{color:"#071321" , backgroundColor:"#D7E6EA" , padding:"0.5rem" , borderRadius:"0.5rem" }} size={35} />
            <h1>{
              arbic == true ? "المنجات" : "Home"
              }</h1>
            </NavLink>
          </li> */}
          <li className="w-full" >
            <NavLink className={
              clsx(
                "w-full flex items-center gap-2 text-black font-bold text-lg  p-2 rounded-2xl transition",
                {
                  "w-full flex items-center gap-2 flex-row-reverse text-black font-bold text-lg hover:bg-slate-50 p-2 rounded-2xl transition"
                  : arbic == true  
                }
                
              )
            } to="/" state={{arbic: arbic}} ><FaBookOpen style={{color:"#071321" , backgroundColor:"#D7E6EA" , padding:"0.5rem" , borderRadius:"0.5rem" }} size={35} />
            <h1>{
              arbic == true ? "المنجات" : "Products"
              }</h1>
            </NavLink>
          </li>
          <li className="w-full " >
            <NavLink className={
              clsx(
                "w-full flex items-center gap-2 text-black font-bold text-lg p-2 rounded-2xl transition",
                {
                  "w-full flex flex-row-reverse items-center gap-2 text-black font-bold text-lg p-2 rounded-2xl transition"
                  : arbic == true  
                }
                
              )
            } to="/categories" state={{arbic: arbic}}><BiSolidCategory style={{color:"#071321" , backgroundColor:"#D7E6EA" , padding:"0.5rem" , borderRadius:"0.5rem" }} size={35} />
            <h1>{
              arbic == true ? "جدول" : "Categories"
              }</h1>
            </NavLink>
          </li>
          <li className="w-full " >
            <NavLink className={
              clsx(
                "w-full flex items-center gap-2 text-black font-bold text-lg p-2 rounded-2xl transition",
                {
                  "w-full flex items-center gap-2 flex-row-reverse text-black font-bold text-lg p-2 rounded-2xl transition"
                  : arbic == true  
                }
                
              )
            } to="comments" state={{arbic: arbic}}><FaComments style={{color:"#071321" , backgroundColor:"#D7E6EA" , padding:"0.5rem" , borderRadius:"0.5rem" }} size={35} />
            <h1>{
              arbic == true ? "جدول" : "Comments"
              }</h1>
            </NavLink>
          </li>
          <li className="w-full" >
            <NavLink className={
              clsx(
                "w-full flex items-center gap-2 text-black font-bold text-lg p-2 rounded-2xl transition",
                {
                  "w-full flex items-center gap-2 flex-row-reverse text-black font-bold text-lgp-2 rounded-2xl transition"
                  : arbic == true  
                }
                
              )
            } to="/contact" state={{arbic: arbic}}>
              <MdContactMail style={{color:"#071321" , backgroundColor:"#D7E6EA" , padding:"0.5rem" , borderRadius:"0.5rem" }} size={35} />
            <h1>{
              arbic == true ? "جدول" : "Contact"
              }</h1>
            </NavLink>
          </li>

          <li className="w-full" >
            <NavLink className={
              clsx(
                "w-full flex items-center gap-2 text-black font-bold text-lg p-2 rounded-2xl transition",
                {
                  "w-full flex items-center gap-2 flex-row-reverse text-black font-bold text-lgp-2 rounded-2xl transition"
                  : arbic == true  
                }
                
              )
            } to="/best-selling-books" state={{arbic: arbic}}>
              <BiBookContent style={{color:"#071321" , backgroundColor:"#D7E6EA" , padding:"0.5rem" , borderRadius:"0.5rem" }} size={35} />
            <h1>{
              arbic == true ? "جدول" : "Best Selling Books"
              }</h1>
            </NavLink>
          </li>
      </ul>

      {/* <div className="cursor-pointer pl-14" onClick={() => setNewArbic()} >
        🌐
      </div> */}
    </div>
  )
}

export default SideBar

  