import React, { useState } from 'react'
import "./Style.css"
function main(taketime) {
  var mil = Math.floor((taketime % 1000) / 100),
    sec = Math.floor((taketime / 1000) % 60),
    min = Math.floor((taketime / (1000 * 60)) % 60),
    hou = Math.floor((taketime / (1000 * 60 * 60)) % 24);

    hou = (hou < 10) ? "0" + hou : hou;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

  return hou + ":" + min + ":" + sec + "." + mil;
}

const Timer = () => {
   const [val,setval]=useState(0)
   const [input,setinput]=useState("")
   let [value,setvalue]=useState(null)
   const [checking,setChecking]=useState(true)
   const handleChange=(e)=>{
     setinput(e.target.value)
   }
   
 
    
   
  
    const runtimer=()=>{
     
     if(!value){
       if(val<=2000){
        clearInterval(value)
       }
       else{
        let id=setInterval(()=>{
          setval((prev)=>prev-1000)
       },1000)
       setvalue(id)
     }
     setChecking(false)
    }
       }
      

    const clear=()=>{
    
      clearInterval(value)
      setvalue(null)
      setChecking(true)
    }
    const reset=()=>{
      clearInterval(value)
      setval(0)
    }
  return (
    <div>
      <input type="number" placeholder='type second' onChange={handleChange} />
      <button onClick={()=>setval(input)}>ADD</button>
      <h2>{main(val)}</h2>
      {checking ? <button onClick={runtimer}>
        START</button>:<button onClick={clear}>STOP</button>}
      
      
      <button onClick={reset}>RESET</button>
    </div>
  )
}

export default Timer