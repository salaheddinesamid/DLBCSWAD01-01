import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import { Header } from './Components/Header';
import { Personal } from './Components/Personal';
import { Ordering } from './Components/Ordering';
import { useState } from 'react';
import { Home } from './Routes/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Confirmation } from './Routes/Confirmation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/confirmation' element={<Confirmation />}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App;
