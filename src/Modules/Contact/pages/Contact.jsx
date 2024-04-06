import ContactMsg from "../components/ContactMsg";
import './style/comments.css'

export default function Contact() {
  return (
    <div className="pt-4" >
    <div className="div-comments flex m-auto flex-col gap-4 items-center pt-8" >
        <ContactMsg />
        <ContactMsg />
        <ContactMsg />
        <ContactMsg />
        <ContactMsg />
        
    </div>
     
    </div>
  )
}
