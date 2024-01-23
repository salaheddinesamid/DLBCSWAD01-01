import React from "react";
import ordersData from "../orders.json"

export function OrderSummary(props){
    let orders = props.data;
    return(
        <div>
            <h3>Order Summary:</h3>
            <div>
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
                <button class="btn btn-primary">Confirm Order</button>
            </div>
        </div>
    )
}