import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter]=useState(0)
  
  const change=(val)=>{
    if(counter+val>=0){
    setCounter(counter+val)
    }
    
  }
  return (
    <div className="App">
      
       <h2>Counter</h2>
       <h3 className={counter%2===0 ? "red":"green"}>{counter}</h3>
       <button  onClick={()=>change(1)}>+</button>
       <button onClick={()=>change(-1)}>-</button>
       <button onClick={()=>setCounter(counter*2)}>double</button>
    </div>
  );
}

export default App;