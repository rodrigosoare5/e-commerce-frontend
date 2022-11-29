import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, useLocation, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';



import './App.css'

const App = () => {
  const location = useLocation()
  return (
    <>
    <Router>       
    <Routes key={location.pathname} location={location}>
    <Route exact path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    {/* <Route path="/checkout" element={<Checkout />} /> */}
  
      </Routes>
    </Router>  
    
    </>
  )
}

export default App;