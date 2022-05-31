import { useState,useEffect } from "react";


import "./Style.css"
export const Table = ()=>{
  
  const [post,setPost]=useState({
        name:null,
        age:null,
        address:null,
        Department:null,
        marital:null,
        Salary:null,
  })

  const updatePost=(ele)=>{
    setPost({
      ...post,
      [ele.name]:ele.value
    })
}
const postData=async(post)=>{
 await fetch("http://localhost:8080/data",{
  method:"POST",
  body:JSON.stringify(post),
  headers: {'Content-Type': 'application/json'}, 
})
console.log(post)

}

    return(
        <div>
      <form className="validate">
        <div className="form-field">
          <label>Full Name</label>
          <input onChange={(e)=>updatePost(e.target)} type="text" name="name" placeholder="Enter Name"  />
        </div>
        <div className="form-field">
          <label>Age</label>
          <input onChange={(e)=>updatePost(e.target)} type="number" name="age"  placeholder="Enter age"  />
        </div>
        <div className="form-field">
          <label >Address</label>
          <input onChange={(e)=>updatePost(e.target)} type="text" name="address" placeholder="Address" id="Enter Address"  />
        </div>
       
        <div className="form-field">
          <label >Department</label>
          <input onChange={(e)=>updatePost(e.target)} type="text" name="Department"  placeholder=" Enter Department" />
        </div>
        <div className="form-field">
          <label >Salary</label>
          <input onChange={(e)=>updatePost(e.target)} type="email" name="Salary" placeholder="Enter salary"  />
        </div>
        <div className="form-field">
          <label>Marital state</label>
          <input onChange={(e)=>updatePost(e.target)}  type="checkbox" name="state" />
        </div>
        <div className="form-field">
          <label ></label>
          <input onClick={(e)=>{e.preventDefault();postData(post)}} className="submit" type="submit" value="Submit" />

        </div>
      </form>
        </div>
    )
}
