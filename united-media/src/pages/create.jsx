import { useNavigate } from "react-router-dom"


export default function Create() {
    const navigate = useNavigate();
  return (
    <div>
    Create page
    <button onClick={()=>{navigate("/event")}}>NEXT</button>
    </div>
  )
}
