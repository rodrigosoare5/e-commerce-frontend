import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom'
import Routers from './routes';

import './App.css'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routers/> 
    </BrowserRouter>
    </>
  )
}

export default App;