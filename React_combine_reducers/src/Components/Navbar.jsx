import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutApi } from "../Redux/Auth/auth.action";

export default function Navbar() {

    const dispatch = useDispatch()
    // const [toggle, settoggle] = useState(true)
    const { isAuth} = useSelector((state)=> state.auth);
    const navigate =useNavigate()
  const handleLoginClick = () => {

    
    dispatch(logoutApi());
  };
  
  const redireactlogin = () =>{
        navigate("/login")
  }
  return (<div>
                <nav className="navbar bg-light">
                    <div className="container-fluid">
                        <Link to="/">
                        <a className="navbar-brand">Navbar</a>
                        </Link>
                        <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        {isAuth ?   
                          <button onClick={()=> handleLoginClick() }  className="btn btn-outline-primary" type="submit">Logout</button>:
                          <button onClick={()=> redireactlogin()} className="btn btn-outline-success" type="submit">Login</button>
                        }
                      
                        </form>
                    </div>
                    </nav>
    </div>

  )
}
