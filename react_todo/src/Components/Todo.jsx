import React from 'react'
import { useState } from 'react'


export  function Todo({getData}) {
    const [text, setText] = useState("")
    const handleChange =(e)=>{

        setText(e.target.value)
    }
  return (
  
  <div className='input_div' >    
  <button  type="button" onClick={()=>{
      getData(text);
    
  }} ><i className="fa fa-plus"></i></button>
  <input type="text"  onChange={handleChange} placeholder="Add a to-do..."  />
</div>

   
  )
}