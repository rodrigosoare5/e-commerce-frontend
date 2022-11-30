import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';

import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/> } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>

      </BrowserRouter>  
    
    </>
  )
}

export default App;