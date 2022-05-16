// import logo from './logo.svg';
import { MobileOpr } from './Components/mobile_por';
import './App.css';
import { MobileCom } from './Components/Mobile_com';

function App() {
  return (
    <div className="App">
     <p>Make this static card in a function components</p>
     <h1>Mobile Operating System</h1>
     <MobileOpr></MobileOpr>
     <h1>Mobile Manufacturers</h1>
     <MobileCom></MobileCom>
    </div>
  );
}

export default App;
