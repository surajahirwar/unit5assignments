import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginApi } from "../Redux/Auth/auth.action";
import "./Login.css"

const Login = () => {
  const dispatch = useDispatch();   
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuth } = useSelector((state)=> state.auth);
  const [loginCreds, setLoginCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
console.log(loginCreds)
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,  
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginApi(loginCreds));
  };
  useEffect(()=>{
    if(isAuth){
      if(location.state==null){
        navigate("/",{replace:true})
    
      }
      else{
    
        navigate(location.state.pathname || "/")
      }
    }
  },[isAuth])
 

  return (
    <div  className="w-25 login_div" > 
      <h1>Login</h1>
      <form  onSubmit={handleSubmit}>
         <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" name="email"
                    placeholder="Enter Email"
                    value={loginCreds.email}
                    onChange={hanldeChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label   name="password"
                type="password"
                placeholder="Enter Password..."
                value={loginCreds.password}
                onChange={hanldeChange} className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  );
};

export default Login;