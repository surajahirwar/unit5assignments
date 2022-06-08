import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import User from './Components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Navbar />
        <User />
    </div>
  )
}

export default App
