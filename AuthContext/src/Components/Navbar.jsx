import { useContext} from "react"
import { AuthCreate } from "../context/AuthContext"

function Navbar() {

    const {isAuth,authtoggle}=useContext(AuthCreate)
    const handelchange=()=>{
        authtoggle()
    }
  return (
  <div>

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid" >
    <a className="navbar-brand" href="#">Home</a>
    {isAuth ? <button onClick={handelchange} className="btn btn-outline-success mr-md-30">Logout</button> : <button onClick={handelchange} className="btn btn-outline-primary">Login</button>} 
        
  
  </div>
        </nav>
  </div>

  
  )
}

export default Navbar;
