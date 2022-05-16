import React from "react"

export const  MobileOpr = () =>{
    const names = ['Android', 'Blackberry', 'iPhone','Windows Phone']
    return (
    	<div >
      {names.map(name => 
      <div key={names.name} >
     
      <li key={names.name}>
          {name}
          </li>
      
      </div>

      )}
      	</div>
    )
}