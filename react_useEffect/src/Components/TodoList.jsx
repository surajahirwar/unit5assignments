import React, { useState, useEffect } from 'react'
import {DeleteItem} from "./DeleteItem"

export  function TodoList() {
  const [todo, setTodo] = useState([]);
  const [newtodo, setnewtodo] = useState("");
    const [show, SetShow] = useState(true);
    const [val, Setnum] = useState(1)                 

    const Pages = (page)=>{

        if(val+page>=1){
            Setnum(page+val)
        }
       
    } 
    const  saveInfo = () => {
    
      fetch("http://localhost:8080/todos",{
          method:"POST",
          headers:{
                  "content-type":"application/json",
          },
          body:JSON.stringify({
                      value:newtodo,
                      isCompleted:false,
                  }),

      })
      .then((data)=> data.json())
      .then((d)=>{
          setTodo([...todo, d]);
          setnewtodo("")
         
      });

};



    useEffect(()=>{
      fetch(`http://localhost:8080/todos?_page=${val}&_limit=2`)
      .then((data)=> data.json())
      .then((d)=>{
        setTodo(d)
      });
  
     },[val]) 


  return (
    <div>
      <div className='input_div' >    
      <button  onClick={saveInfo}  type="button" ><i className="fa fa-plus"></i></button>
      <input type="text"  value={newtodo} onChange={({target})=> setnewtodo(target.value)}   placeholder="Add a to-do..."  />
        </div>
      <div >
      { show ?  todo.map((el)=>{
           return <div  key={el.id} >
             <DeleteItem text={el.value}/>
        </div>
      }) : ""
        }
       <button className='btn' onClick={()=> Pages(-1)}>Prev</button><span className='page_span'>{val}</span>
    <button className='btn'  onClick={()=> Pages(1)
     
    }>Next</button>
      </div>
    <button className='btn' onClick={()=>{
        SetShow(!show)
    }}>SHOW COMPLETED TO-DOS</button>
    </div>
  )
}