import Comment from "../components/Comment";
import './style/comments.css'

export default function Comments() {
  return (
    <div className="pt-4" >
    <div className="div-comments flex m-auto flex-col gap-4 items-center pt-8" >
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </div>
     
    </div>
  )
}
