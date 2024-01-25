import React from "react";
import { useState } from "react";
import ordersData from "../orders.json"

export function OrderSummary(props){
    

    let orders = props.data;
    return(
        <div>
            <h3>Order Summary:</h3>
            <div class="">
                <h5 class="text-center">Personal Information:</h5>
                <div class="col-xl-8">First Name: <b>{props.firstName}</b></div>
                <div class="col-xl-8">Last Name: <b> {props.lastName}</b></div>
                <div class="col-xl-8">Email: <b>{props.email}</b></div>
                <div class="col-xl-8">Address: <b>{props.address}</b></div>
                <h6 class="text-center ">Orders:</h6>
                {orders.map((order)=>{
                    return(
                        <div class="order">
                            <p> <b>Product name: </b>{order.name}</p>
                            <button class="btn btn-danger" onClick={()=> props.handleRemove(order.id,order.price,order.quantity)}>Remove</button>
                        </div>
                    )
                })}
            </div>
            <div class="d-flex justify-content-end">
                <h4>Total Price:{props.total} $</h4>
            </div>
            <div class="row">
                <button class="btn btn-primary" onClick={()=>{
                    props.handleSubmit();
                }}>Confirm Order</button>
            </div>
        </div>
    )
}