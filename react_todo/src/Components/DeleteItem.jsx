import React from 'react'
import {useState} from "react"
import "./Style.css"

export  function DeleteItem(props) {
    const [cut,setCut] = useState(false);

    const handleDelete=()=>{
        setCut(!cut);
    }
  return (
      <div className="todolist">
            <div className='todo_top'>
            <input type="checkbox" onClick={handleDelete } />
            <span style={{textDecoration: cut ?"line-through":""}}>{props.text}</span>
            </div>
            <span> &#9734;</span>   
          
   
      </div>
   

  )
}