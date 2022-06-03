import { useState } from 'react'
import Timer from './components/Timer'
import Stopwatch from './Components/Stopwatch'
import './App.css'

function App() {
  const [change,setChange] = useState("")

  return (
    <div className="App">
      <button onClick={()=>setChange(true)}>TIMER</button>
      <button onClick={()=>setChange(false)}>STOPWATCH</button>
      {change?<Timer/>:<Stopwatch/>}
      
    </div>
  )
}

export default App