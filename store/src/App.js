import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import {Routes, Route, useNavigate, useSearchParams} from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { Personal } from './Components/Personal';
import { Ordering } from './Components/Ordering';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();
  function handleSubmit(x,y,z){
    if(x!=="" && y !=="" && z!==""){
      navigate("/confirmation")
    }
  }
  return (
    <div className="App">
      <Header />
      <div class="row ms-3 mt-4">
        <Personal />
      </div>
      <div class="row ms-3">
        <Ordering />
      </div>
    </div>
  );
}

export default App;
