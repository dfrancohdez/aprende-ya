import React, { useEffect, useRef, useState } from "react"
/*const PayPalButton = paypal.Buttons.driver("react", {
    React,
    ReactDOM
});*/
import { PayPalScriptProvider,PayPalButtons } from '@paypal/react-paypal-js';
const initialOptions = {
    "clientId": "ARQI_YnHnBkLBK8_vJg4uU5zX9ZoYt4FGqk9GJ-AEB0vYDW8hSZNM6cjQofWmf_AJSPcYICUtn9mAjfF",
    currency: "MXN",
    intent: "capture"
};

export const Paypal = () => {
    const createOrder=(data,actions)=>{
        return actions.order.create({
            purchase_units:[
                {
                    amount:{
                        currency_code:"MXN",
                        value:"0.01"
                    }
                }
            ]
        })
    }
    const onApprove=(data,actions)=>{
        return actions.order.capture().then(
            function(details){
                console.log("Successfull")
            }
        )
    }
    return(
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
                createOrder={(data,actions)=>createOrder(data,actions)}
                onApprove={(data,actions)=>onApprove(data,actions)}
            />
        </PayPalScriptProvider>
    )
    /*const paypal = useRef()
    useEffect(()=>{
        window.paypal.Buttons({
            createOrder:(data,actions,err)=>{
                return actions({
                    intent:"CAPTURE",
                    purchase_units:[
                        {
                            description:"compra",
                            amount:{
                                currency_code:"MXN",
                                value:650
                            }
                        }
                    ]
                })
            },
            onApprove:async (data,actions)=>{
                const order= await actions.order.capture()
                console.log(order)
            },
            onError:(err)=>{
                console.log(err)
            }
        }).render(paypal.current)
    },[])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )*/
   
}