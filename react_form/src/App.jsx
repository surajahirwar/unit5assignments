import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Table } from './Components/Table'
import { TableItem } from './Components/TableItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Table />
     <TableItem />
    </div>
  )
}

export default App
