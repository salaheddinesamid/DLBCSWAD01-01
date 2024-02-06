import React from "react";
import { Header } from '../Components/Header';
import { Personal } from '../Components/Personal';
import { Ordering } from '../Components/Ordering';
import { useState } from 'react';
export function Home(){
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