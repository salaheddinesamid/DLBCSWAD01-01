import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import { Header } from './Components/Header';
import { Personal } from './Components/Personal';
import { Ordering } from './Components/Ordering';
import { useState } from 'react';

function App() {
  let [firstName,setFirstName] = useState("");
  let [lastName,setLastName] = useState("");
  let [email,setEmail] = useState("");
  let [address,setAddress] = useState("")
  function handleSubmit(x,y,z,w){
    setFirstName(x);
    setLastName(y);
    setEmail(z);
    setAddress(w);
  }
  return (
    <div className="App">
      <Header />
      <div class="row ms-3 mt-4">
        <Personal handleSubmit={handleSubmit} />
      </div>
      <div class="row ms-3">
        <Ordering firstName={firstName} lastName={lastName} email = {email} address={address} />
      </div>
    </div>
  );
}

export default App;
