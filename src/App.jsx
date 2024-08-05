import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/navbar';
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import Home from './Pages/Home/home';
import Cart from './Pages/Cart/cart';
import Placeorder from './Pages/Placeorder/placeorder';
import Footer from './component/Footer/Footer';
import { useState } from 'react';
import Loginpopup from './component/LoginPopup/Loginpopup';

function App() {
  const [showLogin,setshowLogin] = useState(false);
  return (
    <>
    {showLogin?<Loginpopup setshowLogin={setshowLogin}/>: <></>}
    <div className="App">
  
      <Router> 
       <Navbar setshowLogin={setshowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/placeorder' element={<Placeorder/>}/>
        </Routes>
      </Router>
    </div>
    <Footer/>
    </>
  );
}

export default App;
