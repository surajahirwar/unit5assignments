import React, { useState } from 'react'
import {Todo} from './Todo'
import {DeleteItem} from "./DeleteItem"

export  function TodoList() {
    const [todo, setTodo] = useState([]);
    const [show, SetShow] = useState(true)
    const getData=(text)=>{
  
      setTodo([...todo, text]);

    }
    // const handlechange =() =>{
    //     show(!how)
    // }

  return (
    <div>
      <Todo  getData={getData} />
      <div >
      { show ?  todo.map((elem,index)=>(
            <div >
             <DeleteItem key={index} text={elem}/>
        </div>
         )) : ""
        }
      </div>
    <button className='btn' onClick={()=>{
        SetShow(!show)
    }}>SHOW COMPLETED TO-DOS</button>
    </div>
  )
}