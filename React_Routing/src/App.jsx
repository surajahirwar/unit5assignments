
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { Products } from './components/Products';
import { Contect } from './components/Contect';
import { Product } from './components/Product';
import { PageNotFound } from './components/PageNotFound';


function App() {
 

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/*" element={<PageNotFound />} />
      

      </Routes>
    </div>
  )
}

export default App
