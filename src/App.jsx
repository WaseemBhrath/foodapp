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

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Router> 
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
