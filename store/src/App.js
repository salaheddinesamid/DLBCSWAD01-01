import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import { Header } from './Components/Header';
import { Personal } from './Components/Personal';
import { Ordering } from './Components/Ordering';
import { useState } from 'react';
import { Home } from './Routes/Home';
import {Routes} from "react-router-dom"
import {Route,BrowserRouter} from "react-router-dom"
import { Confirmation } from './Confirmation';
import {useNavigate} from "react-router-dom"

function App() {
  const navigate = useNavigate();
  function Confirm(){
    navigate("/confirmation")
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route pathname="/" element={<Home />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
