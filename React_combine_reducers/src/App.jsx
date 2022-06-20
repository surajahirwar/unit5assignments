
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Todo from './Components/Todo';
import RequiredAuth from './hoc/RequiredAuth';


function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
      <Route path="/" element={ <RequiredAuth> <Todo /> </RequiredAuth>} />
      <Route path="/login" element={  <Login />} />
    </Routes>
   
   
  
    </>
  );
}

export default App;
