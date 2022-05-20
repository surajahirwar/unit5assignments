

import './App.css'
import { Card } from './Components/Card'

function App() {
  const data =[ {
            date:"28/10/2020",
            logo:"https://www.kindpng.com/picc/m/1-11932_amazon-logo-png-amazon-a-logo-transparent-png.png",
            heading:"Amazon",
            subheading:"pay",
            devices: "Desktop",
    }
  ]
  return (
    <div className="App">
      
      <Card data={data} />
    </div>
  )
}

export default App
