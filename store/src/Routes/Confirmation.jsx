import React, { useEffect, useState } from "react";
import Axios from "axios";
import {useNavigate} from "react-router-dom"
export function Confirmation(){
    const navigate = useNavigate();
    return(
        <div>
            <h1 className="text-center">Thank You!!</h1>
            <button className="btn btn-danger text-center" onClick={()=>{
                navigate("/")
            }}>Back Home</button>
        </div>
    )
}