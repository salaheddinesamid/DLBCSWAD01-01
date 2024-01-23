import React, { useState } from "react";
import jsonData from "../products.json";
import { OrderSummary } from "./OrderSummary";
let processors = jsonData["processors"]
let rams = jsonData["rams"];
export function Ordering(){
    let [orders,setOrders] = useState([])
    let [totalPrice,setTotalPrice] = useState(0);
    function deleteContactHandler (id,price,quantity){
            setTotalPrice(totalPrice - price*quantity);
        const newOrdersList = orders.filter((order => {
          return order.id !== id;
          
        }));
      setOrders(newOrdersList);
      
      }
    return(
        <div class="row mt-4">
            <h3>Order Here:</h3>
            <div class="col-xl-7">
                <div class="row ms-4 mt-4">
                    <h4>Products:</h4>
                    <div class="row">
                    <div class="col-xl-6">
                        {processors.map((processor)=>{
                            return(
                                <div class="card col-xl-8 ms-3 mb-3">
                                      <img src={processor.img} class="card-img-top" alt=""></img>
                                      <div class="card-body">
                                      <h5 class="card-title">{processor.name}</h5>
                                      <p>Price: {processor.price} $</p>
                                      <label>Quantity:</label>
                                      <input class="col-xl-5 form-control" onChange={(e)=>{
                                        processor.quantity = e.target.value;
                                        processor.name = `${processor.name} x ${processor.quantity} `
                                      }}/>
                                      <button class="btn btn-success mt-4 d-flex justify-content-center"  onClick={()=>{
                                    setOrders([...orders, processor]);
                                    setTotalPrice(totalPrice = totalPrice + (processor.price)*processor.quantity)
                                }}>Add to Bag</button>
                                      </div>
                                  </div>
                            )
                        })}
                    </div>
                    <div class="col-xl-6">
                        {rams.map((ram)=>{
                            return(
                                <div class="card col-xl-8 ms-3 mb-3">
                                <img src={ram.img} class="card-img-top" alt=""></img>
                                <div class="card-body">
                                <h5 class="card-title">{ram.name}</h5>
                                <p>Price: {ram.price} $</p>
                                <label>Quantity:</label>
                                      <input class="col-xl-5 form-control" onChange={(e)=>{
                                        ram.quantity = e.target.value;
                                        ram.name = `${ram.name} x ${ram.quantity} `
                                      }}/>
                                <button class="btn btn-success" onClick={()=>{
                                    setOrders([...orders, ram]);
                                    setTotalPrice(totalPrice = totalPrice + ram.price *ram.quantity)
                                }}>Add to Bag</button>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
            <div className="col-xl-5">
                <OrderSummary data={orders} handleRemove={deleteContactHandler} total={totalPrice} />
            </div>
        </div>
    )
}